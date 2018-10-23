'use strict';

const logger = require('log4js').getLogger('TEST-APP-ERROR');

exports.expressError = function expressError(error) {
  logger.error(error.toString());
};
