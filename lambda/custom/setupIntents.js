
'use strict';
const Data = require('./gamedata');
const Alexa = require("alexa-sdk")
const setupHandlers = Alexa.CreateStateHandler(Data.GameConst.States.SETUP, {
'AMAZON.YesIntent' : function () {
  console.log("Intro Data?"+JSON.stringify(Data.GameConst));
  this.handler.state = Data.GameConst.States.EVENTS;
  this.emitWithState('BeginningIntent');
},
'AMAZON.NoIntent' : function () {
  this.response.speak('Bye');
  this.emit(':responseReady');
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
    this.emit(':ask',"Sorry, I didn't get that.");
}
});

module.exports = setupHandlers ;
