
'use strict';
require('./gamedata');

const gameHandlers = Alexa.CreateStateHandler(GameConst.States.EVENTS, {
'CatPosIntent': function () {
    const message = 'positive blah...';
    this.emit('VerifyTheCurrentIntent', message);
},
'CatNegIntent': function () {
  const message = 'negative blah...';
  this.emit('VerifyTheCurrentIntent');
},
'PumpkinPosIntent': function () {
    const message = 'positive blah...';
    this.emit('VerifyTheCurrentIntent', message);
},
'PumpkinNegIntent': function () {
  const message = 'negative blah...';
  this.emit('VerifyTheCurrentIntent', message);
},
'VeryTheCurrentIntent':function (message){
  // GameData.currentEvent.name === currentIntentName?
  // this.response.speak()
  if(GameData.currentEvent === 0){
    this.emit(':ask', message)
  } else this.emit('Unhandled');

  // TBD check for end state
},
'EndGameIntent': function() {
  this.handler.state = GameConst.States.ENDING;
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
    this.emit(":ask","Sorry");
}
});

module.exports = gameHandlers;
