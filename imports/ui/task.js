import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

//Inside the event handlers, this refers to an individual task object.
//In a collection, every inserted document has a unique _id field that
//can be used to refer to that specific document.
//We can get the _id of the current task with this._id.
//Once we have the _id, we can use update and remove to modify the relevant task.


 //Template."templete name in html".events({});
Template.task.events({
  'click .play'(){
    console.log("MUSIC PLAYING...");
  },
  'click .like'(){
    var src=Tasks.findOne({_id:this._id});
    Tasks.update(this._id, {
      $set: { favorite: !this.favorite },
    });
    console.log(src);
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
  'click .added'(){//means added person
    Session.set("userFilter", this.username);//Session stores key-value pairs
  },

});
