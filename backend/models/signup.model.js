const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const SignupModel = mongoose.model('user', signupSchema);

module.exports = SignupModel;
