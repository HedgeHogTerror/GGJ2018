
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
  this.emit(':tell','ok');
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
    this.emit(':ask',"Sorry, I didn't get that.");
}
});

module.exports = setupHandlers ;
