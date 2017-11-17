import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var array="this is task 1";

Tasks = new Mongo.Collection('tasks');

Template.searchResult.helpers({
  tasks: [
    {
      toppic:"TOPPIC0",
      packageName:"INGREDIENTS0",
      description:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:0,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"ai",// Meteor.user().username,
    },
    {
      toppic:"TOPPIC0",
      packageName:"INGREDIENTS1",
      description:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:0,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"ai",// Meteor.user().username,
    },
    {
      toppic:"TOPPIC0",
      packageName:"INGREDIENTS2",
      description:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:0,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"ai",// Meteor.user().username,
    },
    {
      toppic:"TOPPIC0",
      packageName:"INGREDIENTS3",
      description:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:0,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"ai",// Meteor.user().username,
    },
    {
      toppic:"TOPPIC0",
      packageName:"INGREDIENTS4",
      description:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:0,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"ai",// Meteor.user().username,
    },
    {
      toppic:"TOPPIC0",
      packageName:"INGREDIENTS5",
      description:"DIRECTIONS",
      createdAt: "2017/11/16",//new Date(), // current time
      likeCount:0,
      likes: [],
      owner: "aikawa",//Meteor.userId(),
      username:"ai",// Meteor.user().username,
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



//ui pointing secondary "menu"
//"item" active

$( document ).ready(function() {
  $('.menu .item').tab();
});


//##############################################################################
