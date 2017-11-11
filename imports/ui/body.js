/*
import { Template } from 'meteor/templating';
import './body.html';

Template.body.helpers({//for data transportation give array[{},{},{}, ] to tasks valuable
  tasks: [                            //You can pass data into templates
                                      //from your JavaScript code by defining helpers.
                                      //In the code above, we defined a helper called tasks on
                                      //Template.body that returns an array.
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ],
});
*/

//update our client-side JavaScript code to
// get our tasks from a collection instead of a static array above:

import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.js';
import './body.html';
import { Meteor } from 'meteor/meteor';


//pass data into templates from JavaScript code
Template.body.helpers({
  tasks() {                   //tasks:function(){return Task.find({});}// same style as above
    //modify "return Tasks.find({});(return all elems in Task DB)", Showing newest tasks at the top
    //DB.find({which},{how})
///return Tasks.find({}, { sort: { createdAt: -1 } });//***default***
    //alphabet order 1: the other way around -1
    //return Tasks.find({}, { sort: { text:1 } });
    if(Session.get("userFilter")){//they set a filter
      return Tasks.find({username:Session.get("userFilter")}, {sort:{favorite: -1}, limit:Session.get("srcLimit")});
    }else{
      console.log("SHOW ALL..");
      return Tasks.find({}, {sort:{favorite: -1,}, limit:Session.get("srcLimit")});
    }
    if(Session.get("favoriteFilter")){

      return Tasks.find({favorite:1}, {limit:Session.get("srcLimit")});
    }
  },
});
//commands below opens a console into your app's local development database.
//Into the prompt, type:
//meteor mongo
//db.tasks.insert({ text: "Hello world!", createdAt: new Date() });




//infinite scrolling
  Session.set("srcLimit", 30);
  lastScrollTop = 0;
  $(window).scroll(function(event){
    //console.log(""+$(window).scrollTop());//between progress bar and top
    //console.log(" "+$(window).height());//window's height
    //console.log("  "+$(document).height());//virtual height as in paper from top
    // test if we are near the bottom of the window
    if($(window).scrollTop() + $(window).height() >= $(document).height()-300) {
      // where are we in the page?
      var scrollTop = $(this).scrollTop();
      // test if we are going down
      if (scrollTop > lastScrollTop){
        // yes we are heading down...
       Session.set("srcLimit", Session.get("srcLimit") + 4);
      }
      lastScrollTop = scrollTop;
    }
  })



//To add a task, just type into the input field and hit enter. ** dosent need click button **
Template.body.events({
  //'submit ."class in html"(event){}'
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;//target means inputed "object".
    const text = target.text.value;

    // Insert a task into the collection
    //Tasks:[{text: },{createdAt: }]
    Tasks.insert({
      text,                  //text:text
      createdAt: new Date(), // current time
      favorite: 0,
      Like: 0,
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
    // Clear form
    target.text.value = '';
  },
  'click .favorites'(){
    //Session.set("userFilter", this.username);
    Session.set("favoriteFilter","favorites");
    console.log("STUG INPLEMENT THIS");
  },
  'click .showall'(){
    console.log("show all clicked");
    Session.set("userFilter", undefined);
  },

});
