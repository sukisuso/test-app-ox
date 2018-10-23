'use strict';

const express = require('express');
const log4js = require('log4js');
const router = require('./app/router');
const expressConfig = require('./app/config/express');
const port = process.env.PORT || 8080;

const app = expressConfig(express);
log4js.configure({
  appenders: { console: { type: 'console' } },
  categories: { default: { appenders: [ 'console' ], level: 'info' } }
});

const logger = log4js.getLogger('TEST-APP');
router(app);

app.listen(port);
logger.info(`App listening on ${port}`)
