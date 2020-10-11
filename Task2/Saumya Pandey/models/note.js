const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});
// It will be used when we send json reponse to client, makes the response cleaner.
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Note', noteSchema);
