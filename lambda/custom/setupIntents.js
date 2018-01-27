
'use strict';
require('./gamedata');

const setupHandlers = Alexa.CreateStateHandler(GameConst.States.SETUP, {
  //is there setup?
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
    this.response.speak("Sorry, I didn't get that. You can try: 'alexa, hello world'" +
        " or 'alexa, ask hello world my name is awesome Aaron'");
}
});

module.exports = setupHandlers;
