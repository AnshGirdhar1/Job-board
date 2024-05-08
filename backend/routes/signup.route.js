const { Router } = require('express');
const SignupModel = require('../models/signup.model');
const signupRouter = Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

signupRouter.post('/', async (req, res) => {
  const { password, email, firstname, lastname } = req.body;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const userAlreadyExists = await SignupModel.findOne({ email });
  if (userAlreadyExists) {
    res.status(302).send({ message: 'User Already Exists' });
  } else {
    try {
      await SignupModel.insertMany([{ ...req.body, password: hashedPassword }]);
      const authToken = jwt.sign({ email }, process.env.JWT_SECRET_KEY);
      res.cookie('authToken', authToken, { domain: 'http://localhost:3000' });
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      console.log(res.getHeaderNames());
      // res.cookie('userDetails', { email, firstname, lastname });
      res.send({ message: 'User created successfully' });
    } catch (e) {
      res.status(500).send({ message: 'Something Went Wrong' });
    }
  }
});

module.exports = signupRouter;
