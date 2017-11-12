import { Template } from 'meteor/templating';

//import { Tasks } from '../api/tasks.js';

import './sorting.html';

Template.sorting.events({
  'click .favorites'(){
    console.log("favoritess clicked");
    Session.set("favoriteFilter","favorites");
  },
  'click .newest'(){
    console.log("show all clicked");
    Session.set("newestFilter", "newest");
  },
  'click .showall'(){
    console.log("show all clicked");
    Session.set("userFilter", undefined);
    Session.set("favoriteFilter",undefined);
    Session.set("newestFilter", undefined);
  },
});
