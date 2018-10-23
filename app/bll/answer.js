'use strict';

const answerRepository = require('../repository/answer');

function validateAnswer(answer) {
  if (!answer) {
    // Throw exception
  }
}

function* find() {
  return yield answerRepository.find();
}

function* findOne(id) {
  return yield answerRepository.findOne(id);
}

function* create(answer) {
  validateAnswer(answer);
  return yield answerRepository.create(answer);
}

exports.findOne = findOne;
exports.create = create;
exports.find = find;
