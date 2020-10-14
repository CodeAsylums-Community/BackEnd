// unknown endpoint
const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: 'Unknown Enpoint' });
};

// validating the incoming body, if username or password does not exist send 400
const validateBody = (req, res, next) => {
  const body = req.body;
  let message = '';
  if (!body.password || !body.username) {
    message = 'Username or Password missing';
  } else if (body.password.length < 3) {
    message = 'Password must be atleast 3 characters long';
  } else if (body.username.length < 3) {
    message = 'Username must be atleast 3 characters long';
  } else {
    next();
  }
  if (message != '') {
    res.status(400).json({ message: message });
  }
};

// sends 500 reponse with error message
const errorHandler = (error, req, res, next) => {
  console.error(error.message);
  res.status(500).json({ error: error.message });
  next(error);
};

module.exports = {
  unknownEndpoint,
  errorHandler,
  validateBody
};
