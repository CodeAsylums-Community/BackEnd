const express = require('express');
const cors = require('cors');
require('express-async-errors'); //  does the job of try-catch block
const quoteRouter = require('./controller/quotes');
const mongoose = require('mongoose');
const config = require('./utils/config');
const middleware = require('./utils/middleware');

// connection to mongodb
mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/quotes', quoteRouter); // route to quotes
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
