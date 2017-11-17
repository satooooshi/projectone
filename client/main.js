import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var array="this is task 1";

Tasks = new Mongo.Collection('tasks');

Template.stack.helpers({
  tasks: [
    {
      toppic:"TOPPIC0",
      ingredients:"INGREDIENTS",
      directions:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:0,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"ai",// Meteor.user().username,
    },
    {
      toppic:"TOPPIC1",
      ingredients:"INGREDIENTS",
      directions:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:3,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"aikawa",// Meteor.user().username,
    },
    {
      toppic:"TOPPIC2",
      ingredients:"INGREDIENTS",
      directions:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:5,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"satoshi",// Meteor.user().username,
    },
    {
      toppic:"TOPPIC6",
      ingredients:"INGREDIENTS",
      directions:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:5,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"sa",// Meteor.user().username,
    },
  ],
});

Template.toppic.helpers({
  date:function(){
    this.createdAt;
  },
  username:function(){
    return this.username;
  },
  likes:function(){
    return this.likes.length;
  },
});

Template.control.events({
  'click .button'(event) {
    array="success!!";
    console.log(array);

    var text=document.getElementById('qqq').value;
    console.log(text);

    Tasks.insert({
      text:text,                  //text:text
      toppic:"TOPPIC",
      ingredients:"INGREDIENTS",
      directions:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:0,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"aikawa",// Meteor.user().username,


    });

  },
});



//ui pointing secondary "menu"
//"item" active

$( document ).ready(function() {
  $('.menu .item').tab();
});


//##############################################################################
