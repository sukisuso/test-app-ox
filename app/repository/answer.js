'use strict';

const datapool = require('../datapool');
const answerModel = datapool.getRepository('Answer');

function find() {
  return answerModel.find({ })
    .populate('test')  
    .lean().exec();
}

function findOne(_id) {
  return answerModel.findOne({ _id })
    .populate('test')
    .lean().exec();
}

function create(answer) {
  const sv = new answerModel(answer);
  return sv.save();
}

exports.findOne = findOne;
exports.create = create;
exports.find = find;