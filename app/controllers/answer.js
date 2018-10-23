'use strict';

const co = require('co');
const answerBll = require('../bll/answer');
const serverError = require('../helper/express-error').expressError; 

function getAllAnswer(req, res) {
  co(function* getAllTest() {
    const answers = yield answerBll.find();
    res.setHeader('Content-Type', 'application/json');
    res.json(answers);
  }).catch(serverError);
}

function getAnswer(req, res) {
  co(function* getTest() {
    const answerId = req.params.id;
    const answer = yield answerBll.findOne(answerId);
    res.setHeader('Content-Type', 'application/json');
    res.send(answer);
  }).catch(serverError);
}

function createAnswer(req, res) {
  co(function* createTest() {
    const newAnswer = req.body;
    const answerDB = yield answerBll.create(newAnswer);
    res.setHeader('Content-Type', 'application/json');
    res.send(answerDB);
  }).catch(serverError);
}


module.exports = function StartPaths(app) {
  app.get('/api/answer', getAllAnswer);
  app.get('/api/answer/:id', getAnswer);
  app.post('/api/answer', createAnswer);
};