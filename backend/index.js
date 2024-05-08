const express = require('express');
const { connection } = require('./config/db');
const signupRouter = require('./routes/signup.route');
const loginRouter = require('./routes/login.route');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

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
