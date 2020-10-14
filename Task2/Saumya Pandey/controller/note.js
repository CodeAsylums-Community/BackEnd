const Note = require('../models/note');
const noteRouter = require('express').Router();

const validateBody = (body) => {
  //validator for request body
  const text = body.text;

  if (typeof text !== 'string') {
    return 'invalid text';
  }
  return '';
};

noteRouter.get('/', async (req, res) => {
  const notes = await Note.find({}); //get all the notes
  res.json(notes);
});

noteRouter.post('/', async (req, res) => {
  const body = req.body;
  const validatedMessage = validateBody(body); //check if the body contains text field or not
  if (validatedMessage != '') {
    return res.status(400).json({ error: validatedMessage });
  }

  const note = await Note({
    text: body.text
  });
  const savedNote = await note.save(); // save note to DB
  res.status(201).json(savedNote);
});

noteRouter.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id); // delete the specified id
  res.status(204).end();
});

noteRouter.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const validatedMessage = validateBody(body);
  if (validatedMessage != '') {
    return res.status(400).json({ error: validatedMessage });
  }
  const newNote = await Note.findByIdAndUpdate(
    id,
    { text: body.text },
    { new: true } // to return the updated note
  );
  res.json(newNote);
});

module.exports = noteRouter;
