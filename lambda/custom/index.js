'use strict';
const Alexa = require("alexa-sdk"),
  setupHandlers = require('./setupIntents'),
  gameHandlers = require('./gameIntents'),
  endingHandlers = require('./endingIntents');

const Data = require('./gamedata');

var APP_ID = undefined;

exports.handler = function(event, context, callback) {
    Data.GameData.reload();
    context.GameData = Data.GameData;
    context.GameConst = Data.GameConst;
    const alexa = Alexa.handler(event, context);
    // alexa.dynamoDBTableName = '';//TBD
    // Data.GameData.reload(); dont think we can attach random props...
    alexa.registerHandlers(newSessionHandlers,setupHandlers,gameHandlers,endingHandlers);
    alexa.execute();
};


const newSessionHandlers = {
    'NewSession': function() {

        // if(Object.keys(this.attributes).length === 0) { // alexa.attributes can be used to save data between sessions
        //     this.attributes['currentEvent'] = 0;
        //     this.attributes['currentEventMessage'] = '';
        // }


        this.handler.state = Data.GameConst.States.SETUP;
        this.emit(':ask', 'Welcome to The Hands of an Angry God. You are an ancient deity who sleeps in a holy temple. You awaken once every one thousand years. A single worshipper earns the right to ask you an important question. Make sure your answer, is <prosody rate="slow">a <emphasis>good</emphasis></prosody> one. Are you ready to play?', 'Are you ready to play?')
    }
};
