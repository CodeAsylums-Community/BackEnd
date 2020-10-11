const express = require('express');
require('express-async-errors');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const loginRouter = require('./controller/login');
const userRouter = require('./controller/user');
const middleware = require('./utils/middleware');

mongoose.connect(config.MONGODB_URI, {
  // Used to remove deprecation warnings
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const app = express();

app.use(cors()); //allowing cors
app.use(express.json()); //parsing body of each request to JSON

app.use('/api/login', middleware.validateBody, loginRouter);
app.use('/api/signup', middleware.validateBody, userRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
