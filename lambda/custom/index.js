'use strict';
const Alexa = require("alexa-sdk"),
  setupHandlers = require('./setupIntents'),
  gameHandlers = require('./gameIntents'),
  endingHandlers = require('./endingIntents');

const GameData = require('./gamedata');

var APP_ID = undefined;

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.dynamoDBTableName = '';//TBD

    alexa.registerHandlers(newSessionHandlers,setupHandlers,gameHandlers,endingHandlers);
    alexa.execute();
};


const newSessionHandlers = {
    'NewSession': function() {
        // if(Object.keys(this.attributes).length === 0) { // alexa.attributes can be used to save data between sessions
        //     this.attributes['endedSessionCount'] = 0;
        //     this.attributes['gamesPlayed'] = 0;
        // }
        this.handler.state = GameData.GameConst.States.SETUP;
        this.response.speak('Welcome, would you like to start a new world?')
        //possible data save
          // you have created/?destroyed + this.attributes['gamesPlayed'].toString() + ' worlds')
             .listen('Say yes to start a world or no to quit.');
        this.emit(':responseReady');
    }
};
