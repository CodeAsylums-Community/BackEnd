// catch errors, send the response appropriately based on error message
const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  if (error.name === 'CastError') {
    res.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message });
  } else {
    res.status(500).json({ error: error.message });
  }
  next(error);
};

const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: 'Unknown Enpoint' });
};

module.exports = {
  unknownEndpoint,
  errorHandler
};
