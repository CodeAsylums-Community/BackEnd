const bcrypt = require('bcrypt');
const userRouter = require('express').Router();
const User = require('../models/user');
const config = require('../utils/config');

userRouter.post('/', async (req, res) => {
  const body = req.body;
  // checking if name field exists in body
  if (!body.name) {
    return res.status(400).json({ error: 'name not found' });
  }
  // encrypting password using bcrypt package
  const passwordHash = await bcrypt.hash(body.password, Number(config.SALT));
  const user = await new User({
    name: body.name,
    username: body.username,
    passwordHash
  });

  const savedUser = await user.save();
  res.status(201).json(savedUser);
});

module.exports = userRouter;
