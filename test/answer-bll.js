'use strict';

const assert = require('assert');
const co = require('co');
const answerBll = require('../app/bll/answer');

const answer = {
  answers: [{
    question: '¿Cuantos años tienes?',
    answer: "26"},
  {
    question: '¿Profesión?',
    answer: 'Informático'
  }],
  userName: 'Jesús',
};

describe('Answer BLL', function() {
  describe('create answer', function() {
    it('should create one answer', function() {
      co(function* () {
        const answerDB = yield answerBll.create(answer);
        assert.notEqual(answerDB, null);
      })
    });

    it('should get all tests and be equal to one', function() {
      co(function* () {
        const answersDB = yield answerBll.find();
        assert.notEqual(answersDB, null);
        assert.equal(answersDB.length, 1);
      })
    });

    it('should get one tests and be equal to one', function() {
      co(function* () {
        const answersDB = yield answerBll.find();
        assert.notEqual(answersDB, null);
        const oneTestsDB = yield answerBll.findOne(answersDB[0]._id);
        assert.notEqual(oneTestsDB, null);
      })
    });
  });
});

