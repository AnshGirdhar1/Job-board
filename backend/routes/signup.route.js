const { Router } = require('express');
const SignupModel = require('../models/signup.model');
const signupRouter = Router();
const bcrypt = require('bcryptjs');

signupRouter.post('/', async (req, res) => {
  const { password, email } = req.body;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const userAlreadyExists = await SignupModel.findOne({ email });
  if (userAlreadyExists) {
    res.status(302).send({ message: 'User Already Exists' });
  } else {
    try {
      await SignupModel.insertMany([{ ...req.body, password: hashedPassword }]);
      res.send({ message: 'User created successfully' });
    } catch (e) {
      res.status(500).send({ message: 'Something Went Wrong' });
    }
  }
});

module.exports = signupRouter;
