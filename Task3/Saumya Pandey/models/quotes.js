const mongoose = require('mongoose');

const quotesSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

// useful method to send cleaner response to client
quotesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

module.exports = mongoose.model('Quote', quotesSchema);
