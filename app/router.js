'use strict';

const datapool = require('./datapool');
const path = require('path');

module.exports = function router(app) {
  datapool.loadEnviroment(app);
};
