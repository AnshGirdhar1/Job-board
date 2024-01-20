const express = require('express');
const { connection } = require('./config/db');
const signupRouter = require('./routes/signup.route');
const loginRouter = require('./routes/login.route');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/signup', signupRouter);
app.use('/login', loginRouter);

app.listen(5000, async () => {
  try {
    await connection;
    console.log('DB CONNECTED');
  } catch (e) {
    console.log(e);
  }
});
