
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
  this.attributes['eventsBlacklist'] = new Array();
  var randomEventId = Data.GameData.getNextRandomEventId(this.attributes);
  var randomEvent =  Data.GameData.questionEvents[randomEventId];
  this.attributes['currentEventId'] = randomEventId;
  this.attributes['currentEvent'] = randomEvent;

  // emit
  this.emit(':ask', randomEvent.intro);
},
'love_intent': function () {
   var intent_samples = new Array("love");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'leave_intent': function () {
   var intent_samples = new Array("leave");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'kind_intent': function () {
   var intent_samples = new Array("kind");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'cruel_intent': function () {
   var intent_samples = new Array("cruel");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'good_intent': function () {
   var intent_samples = new Array("good");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'bad_intent': function () {
   var intent_samples = new Array("bad");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'wrong_intent': function () {
   var intent_samples = new Array("wrong");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'right_intent': function () {
   var intent_samples = new Array("right");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'blessed_intent': function () {
   var intent_samples = new Array("blessed");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'horrid_intent': function () {
   var intent_samples = new Array("horrid");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'okay_intent': function () {
   var intent_samples = new Array("okay");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'sin_intent': function () {
   var intent_samples = new Array("sin");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'accept_intent': function () {
   var intent_samples = new Array("accept");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'punish_intent': function () {
   var intent_samples = new Array("punish");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'embrace_intent': function () {
   var intent_samples = new Array("embrace");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'destroy_intent': function () {
   var intent_samples = new Array("destroy");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'humility_intent': function () {
   var intent_samples = new Array("humility");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'confidence_intent': function () {
   var intent_samples = new Array("confidence");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'spicy_intent': function () {
   var intent_samples = new Array("spicy");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'mild_intent': function () {
   var intent_samples = new Array("mild");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'eat_intent': function () {
   var intent_samples = new Array("eat");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'same_intent': function () {
   var intent_samples = new Array("same");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'different_intent': function () {
   var intent_samples = new Array("different");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'real_intent': function () {
   var intent_samples = new Array("real");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'lie_intent': function () {
   var intent_samples = new Array("lie");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'allowed_intent': function () {
   var intent_samples = new Array("allowed");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'forbidden_intent': function () {
   var intent_samples = new Array("forbidden");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'just_intent': function () {
   var intent_samples = new Array("just");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'unjust_intent': function () {
   var intent_samples = new Array("unjust");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'two_intent': function () {
   var intent_samples = new Array("two");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'three_intent': function () {
   var intent_samples = new Array("three");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'light_intent': function () {
   var intent_samples = new Array("light");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'dark_intent': function () {
   var intent_samples = new Array("dark");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'food_intent': function () {
   var intent_samples = new Array("food");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'foe_intent': function () {
   var intent_samples = new Array("foe");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'cracked_intent': function () {
   var intent_samples = new Array("cracked");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'uncracked_intent': function () {
   var intent_samples = new Array("uncracked");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'spare_intent': function () {
   var intent_samples = new Array("spare");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'kill_intent': function () {
   var intent_samples = new Array("kill");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'lettuce_intent': function () {
   var intent_samples = new Array("lettuce");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'spinach_intent': function () {
   var intent_samples = new Array("spinach");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'bogus_intent': function () {
   var intent_samples = new Array("bogus");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'tryharder_intent': function () {
   var intent_samples = new Array("try harder");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'giveup_intent': function () {
   var intent_samples = new Array("give up");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'free_intent': function () {
   var intent_samples = new Array("free");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'hidden_intent': function () {
   var intent_samples = new Array("hidden");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'polite_intent': function () {
   var intent_samples = new Array("polite");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'nasty_intent': function () {
   var intent_samples = new Array("nasty");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'wowza_intent': function () {
   var intent_samples = new Array("wowza");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'yowza_intent': function () {
   var intent_samples = new Array("yowza");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'fear_intent': function () {
   var intent_samples = new Array("fear");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'snakes_intent': function () {
   var intent_samples = new Array("snakes");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'hurray_intent': function () {
   var intent_samples = new Array("hurray");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},
'watchout_intent': function () {
   var intent_samples = new Array("watch out");
   this.emitWithState('VerifyTheCurrentIntent', intent_samples);
},

'VerifyTheCurrentIntent': function (intentSamples){
  // Validation:
  var currentEvent = this.attributes['currentEvent'];
  var positiveOption = currentEvent.iplus;
  var negativeOption = currentEvent.iminus;
  var variable = currentEvent.variable;

  // Validation
  var variableChange = 0;
  if (intentSamples.includes(positiveOption)) {
    // TODO cap it?
    variableChange = 1;
  } else if (intentSamples.includes(negativeOption)) {
    variableChange = -1;
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
  this.attributes['vDict'][variable] += variableChange;

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

module.exports = gameHandlers;
