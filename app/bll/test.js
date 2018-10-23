'use strict';

const testRepository = require('../repository/test');

function validateAnswer(test) {
  if (!test) {
    // Throw exception
  }
}

function* find() {
  return yield testRepository.find();
}

function* findOne(id) {
  return yield testRepository.findOne(id);
}

function* create(test) {
  validateAnswer(test);
  return yield testRepository.create(test);
}

exports.findOne = findOne;
exports.create = create;
exports.find = find;
