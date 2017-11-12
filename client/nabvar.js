import { Template } from 'meteor/templating';

import { Meteor } from 'meteor/meteor';//In order to use helper function

import { Tasks } from '../imports/api/tasks.js';

//import { Tasks } from '../api/tasks.js';

import './navbar.html';

import '../imports/ui/task.js';

Template.navbar.helpers({

getCurrentSrc:function(){
  console.log("current this text");
  return Session.get("currentSrc").text;
},

playPause:function(){
  if(sound.playing())
    return "glyphicon glyphicon-pause";
  else
    return "glyphicon glyphicon-play";
},

});

//Template."templete name in html".events({});
Template.navbar.events({
 'click .play'(){
   if(sound.playing()){
     /*
     var src=Session.get("currentSrc");
     var sound = new Howl({
       src: [src.text]
     });
     sound.play();
     //console.log(Session.get("source"));
     */
     sound.pause();
   }else{
     sound.play();
   }
 },
 'click .backward'(){
   console.log("back....");
 },
 //'click ."class in html"(){}'
 'click .forward'() {
   console.log("forward....");
 },
});
