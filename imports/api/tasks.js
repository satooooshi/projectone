//Collections are Meteor's way of storing persistent data.
//when reset, meteor reset
import { Mongo } from 'meteor/mongo';

//we define a new "tasks" module that creates a Mongo collection and exports it:
export const Tasks = new Mongo.Collection('tasks');
