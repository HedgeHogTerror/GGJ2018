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
      this.questionEvents = questionEvents;
      this.questionIndex = 0;

      var variableDescriptions = require('./d').d;
      this.variableDescriptions = variableDescriptions;
  },

  randomDescription: function(){

    var l = this.variableDescriptions.length;

    var randomD = this.getRandomInt(0,l);

    var randomAge = this.getRandomInt(2,6);

    var variableRow = this.variableDescriptions[randomD];

    var desc = " no age was found ";

    if(randomAge == 2){
        desc = variableRow['agedesc2plus'];
    }else if(randomAge == 3){
        desc = variableRow['agedesc3plus'];
    }else if(randomAge == 4){
        desc = variableRow['agedesc4plus'];
    }else if(randomAge == 5){
        desc = variableRow['agedesc5plus'];
    }else if(randomAge == 6){
        desc = variableRow['agedesc6plus'];
    }

    return "hello dog,  "+desc;
  },

  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



};

module.exports = { GameData, GameConst};
