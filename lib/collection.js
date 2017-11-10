// shared between client and server
console.log("running on shared");

Images = new Mongo.Collection("images");
Images.allow({

 insert:function(userId, doc){
  console.log("testing security on image insert");
  if (Meteor.user()){// they are logged in
    console.log("doc : ");
    console.log(doc);
    if (userId != doc.createdBy){// the user is messing about
      return false;
    }else {// the user is logged in, the image has the correct user id
      return true;//true means allowed to insert image
    }
  }else {// user not logged in
    return false;
  }
 },
 remove:function(userId, doc){
  return true;
 },

})
