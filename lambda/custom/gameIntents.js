
'use strict';
const Data = require('./gamedata');
const Alexa = require("alexa-sdk")
const gameHandlers = Alexa.CreateStateHandler(Data.GameConst.States.EVENTS, {
'BeginningIntent': function (){
  //attributes to be set:
  // currenteventid
  // currentAge
  // array of eventIds to exclude from next roll


  // important initialization tasks to do once
  var vDict = Data.GameData.returnNewVariableDictionary();
  this.attributes['vDict'] = vDict;
  this.attributes['currentAge'] = 0;

  // generate a new event // the same crap we do every time
  var randomEvent = Data.GameData.randomEvent();
  var variable = randomEvent.variable;
  var num = Data.GameData.variableToIndex(variable);
  this.attributes['currentVariableString'] = variable;
  this.attributes['currentVariable'] = num;
  this.attributes['currentAge'] += 1;
  this.attributes['currentEvent'] = randomEvent;

  // emit
  this.emit(':ask', randomEvent.intro +". Say love or leave." );
},
//TBD These shall be generated....

'CatPosIntent': function () {

var pos = this.attributes['currentEvent'].resultplus;

    // set this attribute to positive in vdict
    this.attributes['vDict'][this.attributes['currentVariableString']] = 1;

    this.context.GameData.message = pos;
    this.emitWithState('VerifyTheCurrentIntent');
},
'CatNegIntent': function () {

var neg = this.attributes['currentEvent'].resultminus;

  // set this attribute to negative in vdict
  this.attributes['vDict'][this.attributes['currentVariableString']] = -1;

  this.context.GameData.message = neg;
  this.emitWithState('VerifyTheCurrentIntent');
},
'PumpkinPosIntent': function () {
    this.context.GameData.message = 'positive blah...';
    this.emitWithState('VerifyTheCurrentIntent');
},
'PumpkinNegIntent': function () {
  this.context.GameData.message = 'negative blah...';
  this.emitWithState('VerifyTheCurrentIntent');
},
'VerifyTheCurrentIntent': function (){

  // generate a new event // the same crap we do every time
  var randomEvent = Data.GameData.randomEvent();
  var variable = randomEvent.variable;
  var num = Data.GameData.variableToIndex(variable);
  this.attributes['currentVariableString'] = variable;
  this.attributes['currentVariable'] = num;
  this.attributes['currentAge'] += 1;
  this.attributes['currentEvent'] = randomEvent;

  // tell a big thing
  var vDictionary = this.attributes['vDict'];
  var description = " ... ";//". Here are some things about now. ";
  for(var key in vDictionary){
    var value = vDictionary[key];

    description += " ... " + Data.GameData.returnDescription(
       Data.GameData.variableToIndex(key),
      this.attributes['currentAge'],
      value
      );
  }

  description += " ... ";

  // random worshipper entrance
  description += Data.GameData.returnRandomWorshipperText();

  if(this.attributes['currentAge'] >= 7){ // end the game
    this.emit(':tell', "You survey all that you have done. And you see. That it is good. The end.");
   }
  else{ // keep playing
    // execute
    if(this.context.GameData.currentEvent == 0){ //map to correct...
      this.emit(':ask', this.context.GameData.message 
        + Data.GameData.returnCurrentAgeDescription(this.attributes['currentAge'])
        + description
        + randomEvent.intro,
         randomEvent.intro);
    } else this.emit('Unhandled');
  }


  // TBD check for end state
},
'EndGameIntent': function() {
  this.handler.state = this.context.GameConst.States.ENDING;
},
'SessionEndedRequest' : function() {
    console.log('Session ended with reason: ' + this.event.request.reason);
},
'AMAZON.StopIntent' : function() {
    this.response.speak('Bye');
    this.emit(':responseReady');
},
'AMAZON.HelpIntent' : function() {
    this.response.speak("You can try: 'alexa, hello world' or 'alexa, ask hello world my" +
        " name is awesome Aaron'");
    this.emit(':responseReady');
},
'AMAZON.CancelIntent' : function() {
    this.response.speak('Bye');
    this.emit(':responseReady');
},
'Unhandled' : function() {
  //TBD behavior?
    this.emit(":ask","Sorry, Unhandled");
}
});

function newEventId(context) {
    events = q;
    bad_events = context.eventsBlacklist;

    possibleEvents = new Array(events.length);
    possibleEvents.forEach(function(item, index, array) {
        possibleEvents[index] = index;
    });
    badEvents.forEach(function(item, index, array) {
        badEvents[index] = NaN;
    });

    possibleEvents = possibleEvents.filter(index => !isNaN(index));

    newEventId = Math.floor(Math.random() * Math.floor(possibleEvents.length));
    context.eventsBlacklist.add(newEventId);

    return newEventId;
}

module.exports = gameHandlers;
