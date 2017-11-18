var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};
var fields = ['packageName', 'description'];

PackageSearch = new SearchSource('tasks', fields, options);


Template.searchResult.helpers({
  getPackages: function() {
    return PackageSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "<b>$&</b>")
      },
      sort: {isoScore: -1}
    });
  },


  isLoading: function() {
    return PackageSearch.getStatus().loading;
  }
});

/*
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
*/
Template.searchResult.rendered = function() {
  PackageSearch.search('');
};

Template.searchBox.events({
  "keyup #search-box": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    console.log(text);
    PackageSearch.search(text);
  }, 200)
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
