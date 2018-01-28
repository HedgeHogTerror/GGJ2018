
'use strict';
const Data = require('./gamedata');
const Alexa = require("alexa-sdk")
const gameHandlers = Alexa.CreateStateHandler(Data.GameConst.States.EVENTS, {
'BeginningIntent': function (){
  //attributes to be set:
  // currenteventid
  // currentAge
  // array of eventIds to exclude from next roll

  var randomEvent = Data.GameData.randomEvent();

  var variable = randomEvent.variable;

  var num = Data.GameData.variableToIndex(variable);

  this.attributes['currentVariable'] = num;
  this.attributes['currentAge'] = 1;
  this.attributes['currentAge'] += 1;

  this.emit(':ask', "Omega. num: " + num +". " + randomEvent.intro + ". Variable is " + this.attributes['currentVariable'] +". Say love or leave." );
},
//TBD These shall be generated....

'CatPosIntent': function () {

  var pos = Data.GameData.returnDescription(this.attributes['currentVariable'], this.attributes['currentAge'], 1);

    this.context.GameData.message = pos;
    this.emitWithState('VerifyTheCurrentIntent');
},
'CatNegIntent': function () {
  var neg = Data.GameData.returnDescription(this.attributes['currentVariable'], this.attributes['currentAge'], -1);

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
  // this.response.speak()
  if(this.context.GameData.currentEvent == 0){ //map to correct...
    this.emit(':ask', this.context.GameData.message);
  } else this.emit('Unhandled');

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
