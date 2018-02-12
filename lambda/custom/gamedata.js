'use strict';

var GameConst = require('./gameconst');

var GameData = {
  reload: function (){
    this.isDebug = false;
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

    this.maxAges = this.isDebug ? 100000000 : 6;

    this.questionEvents = require('./q').q;
    this.variableDescriptions = require('./d').d;

    this.BELL_SOUND = "<audio src=\'https://s3.amazonaws.com/thehandsofanangrygodsound/bell.mp3\'/>";
    this.AGE_END_SOUND = "";//"<audio src=\'https://s3.amazonaws.com/thehandsofanangrygodsound/Age_End.mp3\'/>";
    this.FOOTSTEPS_SOUND = "<break time=\"1s\"/> ";//"<audio src=\'https://s3.amazonaws.com/thehandsofanangrygodsound/supplicant.mp3\'/>";
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

  getNextRandomEventId: function(context) {
    var badEvents = context.eventsBlacklist;

    var possibleEvents = new Array(this.questionEvents.length);
    for (var i = 0; i < possibleEvents.length; ++i) {
      possibleEvents[i] = i;
    }
    for (var i = 0; i < badEvents.length; ++i) {
      possibleEvents[badEvents[i]] = NaN;
    }

    possibleEvents = possibleEvents.filter(index => !isNaN(index));

    if (this.isDebug) {
      var newEventId = possibleEvents[0];
      context.debugId++;
    } else {
      var newEventId = possibleEvents[
        Math.floor(Math.random() * possibleEvents.length)
      ];
    }
    context.eventsBlacklist.push(newEventId);

    return newEventId;
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

  returnCurrentAgeSound: function(age) {
    switch (age) {
      /*case 1:
        return ' STONE_SOUND. ';
      case 2:
        return ' CASTLE_SOUND. ';*/
      case 3:
        return '<audio src=\'https://s3.amazonaws.com/thehandsofanangrygodsound/steam.mp3\'/>';
      case 4:
        return '<audio src=\'https://s3.amazonaws.com/thehandsofanangrygodsound/modern.mp3\'/>';
      case 5:
        return '<audio src=\'https://s3.amazonaws.com/thehandsofanangrygodsound/cyberpunk.mp3\'/>';
      case 6:
        return '<audio src=\'https://s3.amazonaws.com/thehandsofanangrygodsound/scifi.mp3\'/>';
      default:
        return '';
    }
  },

  returnCurrentAgeDescription: function(age){
    if(age==1){
        return "It is the age of stone.";
    }
    else if(age==2){
        return "<emphasis level=\"moderate\"> one thousand years pass. </emphasis> <break time=\"1s\"/> It is the age of noble castles.";
    }else if(age==3){
        return "<emphasis level=\"moderate\"> one thousand years pass. </emphasis> <break time=\"1s\"/> It is the age of steam.";
    }else if(age==4){
        return "<emphasis level=\"moderate\"> one thousand years pass. </emphasis> <break time=\"1s\"/> It is the age of skyscrapers.";
    }else if(age==5){
        return "<emphasis level=\"moderate\"> one thousand years pass. </emphasis> <break time=\"1s\"/> It is the age ... of cyber.";
    }else if(age==6){
        return "<emphasis level=\"moderate\"> one thousand years pass. </emphasis> <break time=\"1s\"/> It is the age of interstellar flight.";
    }else{
        return " . This is an unrecognized age... It's age " + age + " . ";
    }
  },

  returnRandomWorshipperText: function(){
    var approaches = [
    "A supplicant approaches your holy altar.",
    "A worshiper begs for your wisdom.",
    "A loyal follower creeps up to your altar.",
    "A mortal shields their eyes from your radiance.",
    "A devoted follower begs for your attention.",
    "An awed worshiper kneels before you.",
    "A dazed supplicant kisses your ancient altar.",
    "A mortal crawls toward your holy presence.",
    "A small figure bows to the ground.",
    "Someone approaches your altar.",
    "A worshiper glows in your holy presence.",
    "Someone pleads for your wisdom.",
    "Feet scrape the temple floor. Someone approaches.",
    "Someone has come to learn from your wisdom.",
    "A worshipper cowers in awe."
    ];

    var length = approaches.length;

    var rint = this.getRandomInt(0, length-1);

    return this.FOOTSTEPS_SOUND + " " + approaches[rint] + " . ";
  },

  returnDescription: function(variableIndex, age, sign){
    var desc = " ";
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
