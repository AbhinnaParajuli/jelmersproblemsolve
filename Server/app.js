const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const dotenv= require("dotenv");
const cookieParser = require("cookie-parser");
const DB_USERNAME = 'abhinnaparajuli31';
const DB_PASSWORD = 'Abhi@2009'; // Note: This should be URL-encoded
const DB_NAME = 'merndatabase';

app.use(express.json())
dotenv.config({path:'./config.env'})
// URL-encode the password
const encodedPassword = encodeURIComponent(DB_PASSWORD);
require('./DB/conn');
const PORT = process.env.PORT;
// const user=require('./model/userSchema')
app.use(cookieParser())
app.use(cors({origin: 'http://localhost:3001', credentials: true})) // this should be react url
app.use(require('./router/auth'))



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Define your other routes below
