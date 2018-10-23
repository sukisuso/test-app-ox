'use strict';

const datapool = require('../datapool');
const testModel = datapool.getRepository('Test');

function find() {
  return testModel.find({ })
    .lean().exec();
}

function findOne(_id) {
  return testModel.findOne({ _id })
    .lean().exec();
}

function create(test) {
  const sv = new testModel(test);
  return sv.save();
}

exports.findOne = findOne;
exports.create = create;
exports.find = find;