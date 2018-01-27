'use strict';
var Alexa = require("alexa-sdk"),
  require('./gamedata'),
  require('./setupintents'),
  require('./gameintents'),
  require('./endingintents');

const newSessionHandlers = {
    'NewSession': function() {
        // if(Object.keys(this.attributes).length === 0) { // alexa.attributes can be used to save data between sessions
        //     this.attributes['endedSessionCount'] = 0;
        //     this.attributes['gamesPlayed'] = 0;
        // }
        this.handler.state = GameConst.States.EVENTS;
        this.response.speak('Welcome, would you like to start a new world?');
        //possible data save
          // you have created/?destroyed + this.attributes['gamesPlayed'].toString() + ' worlds')
             .listen('Say yes to start a world or no to quit.');
        this.emit(':responseReady');
    }
};

var APP_ID = undefined;

exports.handler = function(event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.dynamoDBTableName = '';//TBD
    alexa.registerHandlers(newSessionHandlers,setupHandlers,gameHandlers,endingHandlers);
    alexa.execute();
};
