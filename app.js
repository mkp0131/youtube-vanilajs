// const express = require('express')
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cookieParser())
// watch module
app.use(morgan('dev'));

import {userRouter} from './routers/userRouter';

app.use('/user', userRouter);

export default app;