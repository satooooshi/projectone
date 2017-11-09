import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if(Meteor.isClient){
  console.log("I am the client.");
}

var img_data=[
  { img_src:"pic1.jpg",
    alt:"mypic1"
  },
  { img_src:"pic2.jpeg",
    alt:"mypic2"
  },
  { img_src:"pic3.jpg",
    alt:"mypic3"
  }
];

Template.images.helpers({images:img_data});

Template.images.events({
  'click.js-image':function(event){
    console.log(event);
    //alert('hello!');
  }
});


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
