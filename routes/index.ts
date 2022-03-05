import express, {Router, Request, Response, NextFunction} from 'express';
const app: express.Application = express();
var cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use('/upload/', require('./upload'));





module.exports = app
