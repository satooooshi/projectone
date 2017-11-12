import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

import './howler.js';



//Inside the event handlers, this refers to an individual task object.
//In a collection, every inserted document has a unique _id field that
//can be used to refer to that specific document.
//We can get the _id of the current task with this._id.
//Once we have the _id, we can use update and remove to modify the relevant task.


//Global valuable
src=0;
sound=0;

Template.task.helpers({

getlikeNum:function(){
  return this.likes.length;
},

});


 //Template."templete name in html".events({});
Template.task.events({
  'click .play'(){

    if(sound)sound.stop();

    console.log("MUSIC PLAYING...");

    src=Tasks.findOne({_id:this._id});
    sound = new Howl({
      src: [src.text]
    });

    Session.set("currentSrc",src);

    sound.play();

    console.log(sound.duration());
    sound.rate(2);
    sound.loop(true);//repeat this sound


  },
  'click .like'(){
    //var src=Tasks.findOne({_id:this._id});
    var user=Meteor.users.findOne({_id:Meteor.userId()});
    var inlike=user._id;
    Tasks.update(
      this._id, {
      $set: { favorite: !this.favorite },
    });
    console.log(user);
    Tasks.update(
    {
        _id : this._id,
        likes : {  $ne : user._id}
    },
    {
        $inc : { likeCount : 1 },
        $push : {  likes : user._id }
    }
    )

    console.log("liked now...");
  },

  //'click ."class in html"(){}'
  'click .toggle-checked'() {
    // Set the "checked" property to the opposite of its current value
    //Tasks.update(this._id(どれを),{})
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  //'click ."class in html"(){}'
  'click .delete'(){
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
    Tasks.remove(this._id);
  },
  'click .added'(){//means whom added this song
    Session.set("userFilter", this.username);//Session stores key-value pairs
  },

});
