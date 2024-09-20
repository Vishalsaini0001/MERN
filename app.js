require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
app.use(express.json());
const conectDB = require("./utils/db");
const chalk = require("chalk");
const errorhandler = require("./middlewares/error-middleware");

app.use("/api", router);
app.use(errorhandler);

const PORT = 3000;
conectDB().then(() => {
  app.listen(PORT, () => {
    console.log(chalk.cyan("Server is running..."));
  });
});
