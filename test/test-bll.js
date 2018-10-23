'use strict';

const assert = require('assert');
const co = require('co');
const testBll = require('../app/bll/test');

const test = {
  questions: ['¿Todo ok?'],
  name: 'Primer test',
  description: 'description'
};

describe('Test BLL', function() {
  describe('create test', function() {
    it('should create one test', function() {
      co(function* () {
        const testDB = yield testBll.create(test);
        assert.notEqual(testDB, null);
      })
    });

    it('should get all tests and be equal to one', function() {
      co(function* () {
        const testsDB = yield testBll.find();
        assert.notEqual(testsDB, null);
        assert.equal(testsDB.length, 1);
      })
    });

    it('should get one tests and be equal to one', function() {
      co(function* () {
        const testsDB = yield testBll.find();
        assert.notEqual(testsDB, null);
        const oneTestsDB = yield testBll.findOne(testsDB[0]._id);
        assert.notEqual(oneTestsDB, null);
      })
    });
  });
});

