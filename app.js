require('dotenv').config()
const express = require("express");
const app = express();
const router = require("./router/auth-router");
app.use(express.json());
const conectDB = require("./utils/db");
const userModel = require('./models/user-model.js')


app.use("/api", router);


const PORT = 3000;
conectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running...");
  });
});
