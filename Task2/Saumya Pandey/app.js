const express = require('express');
const cors = require('cors');
require('express-async-errors'); // help us to not write try-catch block
const noteRouter = require('./controller/note');
const mongoose = require('mongoose');
const config = require('./utils/config');
const middleware = require('./utils/middleware');

mongoose.connect(config.MONGODB_URI, {
  // Used to remove deprecation warnings
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const app = express();

app.use(cors()); //allwoing cors
app.use(express.json()); //parsing body of each request to JSON
app.use('/api/notes', noteRouter);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
