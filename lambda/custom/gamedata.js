'use strict';

var GameConst = require('./gameconst');

var GameData = {
  reload: function (){
    this.repeatWelcome = false;
    this.repeatTutorial = false;

    //this.events = require('events').events;
    this.eventIndex = 0;
    //generate random event...
    //event id map probably
    this.currentAge = 0;
    this.currentEvent = 0;
    this.message = 0;
    // randomize the events.

    this.promptEveryTime = false;
    this.repromptIfNoResponse = true;

      // randomize the question events.
      var questionEvents = require('./q').q;
      for (var i = questionEvents.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = questionEvents[i];
          questionEvents[i] = questionEvents[j];
          questionEvents[j] = temp;
      }
      this.questionEvents = questionEvents;
      this.questionIndex = 0;

      var variableDescriptions = require('./d').d;
      this.variableDescriptions = variableDescriptions;

  }
};

module.exports = { GameData, GameConst};
