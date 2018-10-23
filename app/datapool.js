'use strict';

const mongoose = require('mongoose');
const fs = require('fs');
const config = require('./config/config');
const CONTROLLERS_FOLDER = '/controllers';
const MODELS_FOLDER = '/dto';
const ObjectId = mongoose.Types.ObjectId;
const logger = require('log4js').getLogger('TEST_APP');

if (process.env.NODE_ENV === 'test') {
  loadRepositories();
  mongoose.connect(config.database_test);
} else {
  mongoose.connect(config.database);
}

exports.getRepository = function getRepository(model) {
  return mongoose.model(model);
};

function loadRepositories() {
  const files = fs.readdirSync(`${__dirname}${MODELS_FOLDER}`);
  logger.info('Loading models');
  files.forEach((file) => {
    logger.info(`##${MODELS_FOLDER}/${file.split('.')[0]}`);
    require(`.${MODELS_FOLDER}/${file.split('.')[0]}`);
  });
}

exports.id = function createObjectId(id) {
  return ObjectId(id);
};

function loadControllers(app) {
  const files = fs.readdirSync(`${__dirname}${CONTROLLERS_FOLDER}`);
  logger.info('Loading controllers');
  files.forEach((file) => {
    logger.info(`##${CONTROLLERS_FOLDER}/${file.split('.')[0]}`);
    const controller = require(`.${CONTROLLERS_FOLDER}/${file.split('.')[0]}`);
    controller(app);
  });
}

exports.loadEnviroment = function loadPoolAplication(app) {
  loadRepositories();
  loadControllers(app);
};
