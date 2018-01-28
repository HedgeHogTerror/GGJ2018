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

    var desc = " neutral ";

    var randomSign = this.getRandomInt(-1,1);

    if(randomAge == 2){
        if(randomSign == 1){
           desc = variableRow['agedesc2plus'];
        }else if(randomSign == -1){
            desc = variableRow['agedesc2minus'];
        }
    }else if(randomAge == 3){
        if(randomSign == 1){
           desc = variableRow['agedesc3plus'];
        }else if(randomSign == -1){
            desc = variableRow['agedesc3minus'];
        }
    }else if(randomAge == 4){
        if(randomSign == 1){
           desc = variableRow['agedesc4plus'];
        }else if(randomSign == -1){
            desc = variableRow['agedesc4minus'];
        }
    }else if(randomAge == 5){
        if(randomSign == 1){
           desc = variableRow['agedesc5plus'];
        }else if(randomSign == -1){
            desc = variableRow['agedesc5minus'];
        }
    }else if(randomAge == 6){
        if(randomSign == 1){
           desc = variableRow['agedesc6plus'];
        }else if(randomSign == -1){
            desc = variableRow['agedesc6minus'];
        }
    }

    return "hey hippo, " + "variable " + variableRow['variable'] + ". age " + randomAge + " sign " + randomSign + " " +desc;
  },

  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



};

module.exports = { GameData, GameConst};
