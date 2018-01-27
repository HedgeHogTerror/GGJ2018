'use strict';

var GameConst = require('./GameConst');

var GameData = {
  reload: function (){
    this.repeatWelcome = false;
    this.repeatTutorial = false;

    //this.events = require('events').events;
    this.eventIndex = 0;
    //generate random event...
    //event id map probably
    this.currentEvent = 0;
    // randomize the events.

    this.promptEveryTime = false;
    this.repromptIfNoResponse = true;

  }
};

module.exports = GameData;
model.exports = GameConst;
