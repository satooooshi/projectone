/*
//var chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style


describe('my module', function () {
  it('does something that should be tested', function () {
    // This code will be executed by the test driver when the app is started
    // in the correct mode

  })
})

   describe('Be welcome to Mocha', function() {
     it('with a failing test', function() {
       assert(false, 'Hello World');
     });
});
*/
//import {assert} from 'chai';
//import PostService from '/imports/api/posts/services/PostService';


import { resetDatabase } from 'meteor/xolvio:cleaner';
// NOTE: Before writing a method like this you'll want to double check
// that this file is only going to be loaded in test mode!!
Meteor.methods({
  'test.resetDatabase': () => resetDatabase(),
});
describe('my module', function (done) {
  beforeEach(function (done) {
    // We need to wait until the method call is done before moving on, so we
    // use Mocha's async mechanism (calling a done callback)
    Meteor.call('test.resetDatabase', done);
  });
});


import faker from 'faker';
Factory.define('todo', Todos, {
  listId: () => Factory.get('list'),
  text: () => faker.lorem.sentence(),
  createdAt: () => new Date(),
});


const todo = Factory.create('todo');
// If we have a list already, we can pass in the id and avoid creating another:
const list = Factory.create('list');
const todoInList = Factory.create('todo', { listId: list._id });


import StubCollections from 'meteor/hwillson:stub-collections';
import { Todos } from 'path/to/todos.js';
StubCollections.stub(Todos);
// Now Todos is stubbed to a simple local collection mock,
//   so for instance on the client we can do:
Todos.insert({ a: 'document' });
// Restore the `Todos` collection
StubCollections.restore();


describe('Post Service', function () {
    it('Should be able to create a post', function () {
        //const postId = PostService.createPost({title: 'Hello'})

        //assert.isString(postId);
    });
    it('with a failing test1', function() {
      //assert(false, 'Hello World');
      expect(true).be.true; // trueの時のみtrue
    });
    it('with a failing test2', function() {
      //assert(false, 'Hello World');
      expect(true).be.true; // trueの時のみtrue
    });
    it('with a failing test4', function() {
      //assert(false, 'Hello World');
      expect(myFunction(2,2)).to.equal(4);

    });




});
