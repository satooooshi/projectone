/*
Packages = new Mongo.Collection('packages');

if(Meteor.isServer) {
  Packages._ensureIndex({packageName: 1, description: 1});
}
*/
//******************************************************************************
Tasks=new Mongo.Collection('tasks');

if(Meteor.isServer) {
  Tasks._ensureIndex({packageName: 1, description: 1});
}
