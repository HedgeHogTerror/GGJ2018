
'use strict';
const Data = require('./gamedata');
const Alexa = require("alexa-sdk");
const GameIntents = require('./i').i;

var EVENTS_STATE = {
  'BeginningIntent': function (){
    //attributes to be set:
    // currenteventid
    // currentAge
    // array of eventIds to exclude from next roll


    // important initialization tasks to do once
    var vDict = Data.GameData.returnNewVariableDictionary();
    this.attributes['vDict'] = vDict;
    this.attributes['currentAge'] = 1;

    // generate a new event // the same crap we do every time
    this.attributes['eventsBlacklist'] = new Array();
    var randomEventId = Data.GameData.getNextRandomEventId(this.attributes);
    var randomEvent =  Data.GameData.questionEvents[randomEventId];
    this.attributes['currentEventId'] = randomEventId;
    this.attributes['currentEvent'] = randomEvent;

    var introduction = Data.GameData.returnCurrentAgeDescription(this.attributes['currentAge'])
      + Data.GameData.returnRandomWorshipperText()
      + " "
      + randomEvent.intro;

    this.emit(':ask', introduction, randomEvent.intro);
  },

  'VerifyTheCurrentIntent': function (intentSamples){
    // Validation:
    var currentEvent = this.attributes['currentEvent'];
    var positiveOption = currentEvent.iplus;
    var negativeOption = currentEvent.iminus;
    var variable = currentEvent.variable;

    var responseText = Data.GameData.BELL_SOUND;

    // Validation
    var variableChange = 0;
    if (intentSamples.includes(positiveOption)) {
      // TODO cap it?
      variableChange = 1;
      responseText += currentEvent.resultplus;
    } else if (intentSamples.includes(negativeOption)) {
      variableChange = -1;
      responseText += currentEvent.resultminus;
    } else {
      // Ugh, re-emit current state description
    }

    // Stupid repeat logic
    if (variableChange == 0) {
      this.emit(':ask', 'Say '
        + positiveOption
        + ' or '
        + negativeOption
      );
    }

    // generate a new event // the same crap we do every time
    var randomEventId = Data.GameData.getNextRandomEventId(this.attributes);
    var randomEvent =  Data.GameData.questionEvents[randomEventId];
    this.attributes['currentEventId'] = randomEventId;
    this.attributes['currentEvent'] = randomEvent;
    this.attributes['currentAge'] += 1;
    this.attributes['vDict'][variable] = variableChange;

    // tell a big thing
    var vDictionary = this.attributes['vDict'];
    var description = "";//". Here are some things about now. ";

    var firstDescription = true;
    for(var key in vDictionary){
      var value = vDictionary[key];
      var variableDescription = Data.GameData.returnDescription(
        Data.GameData.variableToIndex(key),
        this.attributes['currentAge'],
        value
      );

      if (variableDescription.length > 1) {
        if (firstDescription) {
          firstDescription = false;
        } else {
          description += Data.GameData.returnCurrentAgeSound(this.attributes['currentAge']);
        }
        description += Data.GameData.returnDescription(
           Data.GameData.variableToIndex(key),
          this.attributes['currentAge'],
          value
        );
      }
    }


    if(this.attributes['currentAge'] >= Data.GameData.maxAges){ // end the game
      this.emit(':tell', responseText
        + " "
        + Data.GameData.AGE_END_SOUND
        + Data.GameData.returnCurrentAgeDescription(this.attributes['currentAge'])
        + "<break time=\"1s\"/> "
        + description
        + " You survey all that you have done. And you see. That it is good. The end."
      );
     }
    else{ // keep playing
      // random worshipper entrance
      description += Data.GameData.returnRandomWorshipperText();

      this.emit(':ask', responseText
        + " "
        + Data.GameData.AGE_END_SOUND
        + Data.GameData.returnCurrentAgeDescription(this.attributes['currentAge'])
        + "<break time=\"1s\"/> "
        + description
        + randomEvent.intro,
         randomEvent.intro);
    }


    // TBD check for end state
  },
  'EndGameIntent': function() {
    this.handler.state = this.context.GameConst.States.ENDING;
  },
  'AMAZON.HelpIntent' : function() {
    this.emit(':ask', "Answer the prompt or say 'stop' to exit the game");
  },
  'AMAZON.StopIntent' : function() {
      this.emit(':tell', 'You survey all that you have done. And you see. That it is good. ');
  },
  'AMAZON.CancelIntent' : function() {
      this.emit(':tell', 'You survey all that you have done. And you see. That it is good. ');
  },
  'NewSession': function() {

      if(Object.keys(this.attributes).length > 0) { // alexa.attributes can be used to save data between sessions
        this.handler.state = '' // delete this.handler.state might cause reference errors
        delete this.attributes;
        console.log("deleted attr?", this.attributes);
      }

      this.handler.state = Data.GameConst.States.SETUP;
      this.emit(':ask', 'Welcome to The Hands of an Angry God. You are an ancient deity who sleeps in a holy temple. You awaken once every one thousand years. A single worshipper earns the right to ask you an important question. Make sure your answer, is <prosody rate="slow">a <emphasis>good</emphasis></prosody> one. Are you ready to play?', 'Are you ready to play?')
  },
  'SessionEndedRequest' : function() {
      console.log('Session ended with reason: ' + this.event.request.reason);
  },
  'Unhandled' : function() {
    this.emit(':tell', 'Sorry, I couldn\'t understand');
  }
};

// Add the autogenerated funciton handlers for custom intents
for (var intent in GameIntents) {
  if (GameIntents.hasOwnProperty(intent)) {
    EVENTS_STATE[intent] = GameIntents[intent];
  }
}

const gameHandlers = Alexa.CreateStateHandler(Data.GameConst.States.EVENTS, EVENTS_STATE);
module.exports = gameHandlers;
