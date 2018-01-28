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

    var randomSign = this.getRandomInt(-1,1);

    var d = this.returnDescription(randomD, randomAge, randomSign);

    return "hey liger. " + ". variable: " + this.variableDescriptions[randomD].variable + ". age " + randomAge + ". sign " + randomSign + ". " +d;
  },

  randomEvent: function(){
    var length = this.questionEvents.length;

    var r = this.getRandomInt(0, length);

    var randomQuestionEvent = this.questionEvents[r];

    return randomQuestionEvent;
  },

  variableToIndex: function(variableString){
    var l = this.variableDescriptions.length;

    var i;

    for(i = 0; i < l; i++){
        if(variableString == this.variableDescriptions[i].variable){
            return i;
        }
    }

    return -1; // not found
  },

  returnNewVariableDictionary: function(){
    var l = this.variableDescriptions.length;

    var vDict = new Object();

    var i;
    for(i = 0; i < l; i++){
        vDict[this.variableDescriptions[i].variable] = 0;
    }

    // new vDict where everything is 0 to start
    return vDict;
  },

  returnDescription: function(variableIndex, age, sign){

    var desc = " neutral ";

    var variableRow = this.variableDescriptions[variableIndex];

    if(age == 2){
        if(sign == 1){
           desc = variableRow['agedesc2plus'];
        }else if(sign == -1){
            desc = variableRow['agedesc2minus'];
        }
    }else if(age == 3){
        if(sign == 1){
           desc = variableRow['agedesc3plus'];
        }else if(sign == -1){
            desc = variableRow['agedesc3minus'];
        }
    }else if(age == 4){
        if(sign == 1){
           desc = variableRow['agedesc4plus'];
        }else if(sign == -1){
            desc = variableRow['agedesc4minus'];
        }
    }else if(age == 5){
        if(sign == 1){
           desc = variableRow['agedesc5plus'];
        }else if(sign == -1){
            desc = variableRow['agedesc5minus'];
        }
    }else if(age == 6){
        if(sign == 1){
           desc = variableRow['agedesc6plus'];
        }else if(sign == -1){
            desc = variableRow['agedesc6minus'];
        }
    }

    return desc;
  },

  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



};

module.exports = { GameData, GameConst};
