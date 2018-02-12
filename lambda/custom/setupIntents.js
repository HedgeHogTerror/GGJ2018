
'use strict';
const Data = require('./gamedata');
const Alexa = require("alexa-sdk")
const setupHandlers = Alexa.CreateStateHandler(Data.GameConst.States.SETUP, {
'AMAZON.YesIntent' : function () {
  //console.log("Intro Data?"+JSON.stringify(Data.GameConst));
  this.handler.state = Data.GameConst.States.EVENTS;
  this.emitWithState('BeginningIntent');
},
'AMAZON.NoIntent' : function () {
  this.emit(':tell','');
},
'SessionEndedRequest' : function() {
    console.log('Session ended with reason: ' + this.event.request.reason);
},
'AMAZON.StopIntent' : function() {
  this.emit(':tell','');
},
'AMAZON.HelpIntent' : function() {
  this.emit(':ask', "You can try: 'yes' to start the game or 'no' to quit.");
},
'AMAZON.CancelIntent' : function() {
    this.emit(':tell','');
},
'Unhandled' : function() {
    this.emit(':ask',"Sorry, I didn't get that.");
}
});

module.exports = setupHandlers ;
