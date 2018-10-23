'use strict';

const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const log4js = require('log4js');
const logger = log4js.getLogger('EXPRESS');

module.exports = function createDeafaultExpressConfiguration(express) {
  const app = express();
  const PUBLIC_URL = path.join(__dirname, '/../../../build');

  app.use(log4js.connectLogger(logger, { level: 'info', format: ':method :url' }));
  app.use(express.static(PUBLIC_URL));
  app.use(helmet());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true,
  }));

  app.disable('x-powered-by');
  return app;
};