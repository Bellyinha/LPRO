const jwt = require('jsonwebtoken');

const SECRET_KEY = 'mysecretkey';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJ1c2VybmFtZSI6Imltb3JhZXMiLCJpYXQiOjE3MjUyNzc4NDIsImV4cCI6MTcyNTI3Nzg2N30.rEHeXmpTqihkTK8bNc8g7veyJsKwzPu0d_WemdsIvn0';

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    console.log(decoded);
  } catch (err) {
    console.log("Invalid token: ", err.message)
  }