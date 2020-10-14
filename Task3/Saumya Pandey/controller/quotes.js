const Quote = require('../models/quotes');
const quoteRouter = require('express').Router();

//validating body to check if text fields exists
const validateBody = (body) => {
  const text = body.text;

  if (typeof text !== 'string') {
    return 'invalid text';
  }
  return '';
};

quoteRouter.get('/', async (req, res) => {
  const quotes = await Quote.find({});
  res.json(quotes);
});

quoteRouter.post('/', async (req, res) => {
  const body = req.body;
  const validatedMessage = validateBody(body);
  if (validatedMessage != '') {
    return res.status(400).json({ error: validatedMessage });
  }
  const quote = await Quote({
    text: body.text
  });
  const savedQuote = await quote.save();
  res.status(201).json(savedQuote);
});

quoteRouter.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;

  const validatedMessage = validateBody(body);
  if (validatedMessage != '') {
    return res.status(400).json({ error: validatedMessage });
  }
  const newQuote = await Quote.findByIdAndUpdate(
    id,
    { text: body.text },
    { new: true } // return the updated data
  );
  res.json(newQuote);
});

quoteRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Quote.findByIdAndDelete(id);
  res.status(204).end();
});

module.exports = quoteRouter;
