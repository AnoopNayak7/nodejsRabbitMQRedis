import loggerConfig from './loggerConfig.js'
import express from 'express';
const app = express();

let logger = null;

if (app.settings.env !== 'production') {
    logger = loggerConfig()
}

export default logger