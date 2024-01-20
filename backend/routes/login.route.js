const { Router } = require('express');
const loginRouter = Router();
const jwt = require('jsonwebtoken');
const SignupModel = require('../models/signup.model');
const bcrypt = require('bcryptjs');
require('dotenv').config();

loginRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const foundUserByEmail = await SignupModel.find({ email });
  if (foundUserByEmail) {
    const isPasswordMatched = bcrypt.compareSync(
      password,
      foundUserByEmail.password
    );
    const authToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY);
    if (isPasswordMatched) {
      res.send({ message: 'Login Successful', authToken });
    } else {
      res.send({ message: 'Wrong Password' }, 403);
    }
  } else {
    res.send({ message: 'No User Found' }, 404);
  }
});

module.exports = loginRouter;
