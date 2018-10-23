'use strict';

const co = require('co');
const testBll = require('../bll/test');
const serverError = require('../helper/express-error').expressError; 

function getAllTest(req, res) {
  co(function* getAllTest() {
    const tests = yield testBll.find();
    res.setHeader('Content-Type', 'application/json');
    res.json(tests);
  }).catch(serverError);
}

function getTest(req, res) {
  co(function* getTest() {
    const testId = req.params.id;
    const test = yield testBll.findOne(testId);
    res.setHeader('Content-Type', 'application/json');
    res.send(test);
  }).catch(serverError);
}

function createTest(req, res) {
  co(function* createTest() {
    const newTest = req.body;
    const testDB = yield testBll.create(newTest);
    res.setHeader('Content-Type', 'application/json');
    res.send(testDB);
  }).catch(serverError);
}


module.exports = function StartPaths(app) {
  app.get('/api/test', getAllTest);
  app.get('/api/test/:id', getTest);
  app.post('/api/test', createTest);
};