
'use strict';
const Data = require('./gamedata');
const Alexa = require("alexa-sdk")
const endingHandlers = Alexa.CreateStateHandler(Data.GameConst.States.ENDING, {
//ending/restart intents TBD...
'SessionEndedRequest' : function() {
    console.log('Session ended with reason: ' + this.event.request.reason);
},
'AMAZON.StopIntent' : function() {
    this.response.speak('Bye');
    this.emit(':responseReady');
},
'AMAZON.CancelIntent' : function() {
    this.response.speak('Bye');
    this.emit(':responseReady');
},
'Unhandled' : function() {
    this.response.speak("Sorry, I didn't get that. You can try: 'alexa, open hands of an angry god'");
}
});

module.exports = endingHandlers;
