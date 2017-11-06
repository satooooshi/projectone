/*
var chai=require('chai'),
    expect=chai.expect;
//function validator(){
//  return ['error.nonpositive'];
//}

validator=require('../lib/validator');



describe('A Validator', function(){

  it('will return no errors for valid numbers', function(){
    expect(validator(7)).to.be.empty;
  });

  describe('will include error.nonpositive for not strictly positive numbers:', function() {
    it('like 0', function() { expect(validator(0)).to.include('error.nonpositive');
    });
    it('like -2', function() { expect(validator(-2)).to.include('error.nonpositive');
    });
  });


  describe('will include error.three for divisible by 3 numbers:', function() {
    it('like 3', function() { expect(validator(3)).to.include('error.three');
    });
    it('like 15', function() { expect(validator(15)).to.include('error.three');
    });
  });

  describe('will include error.five for divisible by 5 numbers:', function() {
    it('like 5', function() { expect(validator(5)).to.include('error.five');
    });
    it('like 15', function() { expect(validator(15)).to.include('error.five');
    });
  });


});
*/


var chai=require('chai'),
    expect=chai.expect;
//function validator(){
//  return ['error.nonpositive'];
//}

validator=require('../lib/validator');


function expectedToIncludeErrorWhenInvalid(number, error) {
     it('like ' + number, function () {
       expect(validator(number)).to.include(error);
     });
}

describe('A Validator', function () {
  it('will return no errors for valid numbers', function () {
    expect(validator(7)).to.be.empty;
  });

  describe('will include error.nonpositive for not strictly positivenumbers:',
  function () {
       expectedToIncludeErrorWhenInvalid(0, 'error.nonpositive');
       expectedToIncludeErrorWhenInvalid(-2, 'error.nonpositive');
  });
  describe('will include error.three for divisible by 3 numbers:',
  function () {
       expectedToIncludeErrorWhenInvalid(3, 'error.three');
       expectedToIncludeErrorWhenInvalid(15, 'error.three');
  });
  describe('will include error.five for divisible by 5 numbers:',
  function () {
       expectedToIncludeErrorWhenInvalid(5, 'error.five');
       expectedToIncludeErrorWhenInvalid(15, 'error.five');
  });

});
