require("dotenv").config();
const cors = require('cors')
const express = require("express");
const app = express();
const router = require("./router/auth-router");
app.use(express.json());
const conectDB = require("./utils/db");
const chalk = require("chalk");
const errorhandler = require("./middlewares/error-middleware");
app.use(cors());

app.use("/api", router);
app.use(errorhandler);
 
conectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(chalk.cyan("Server is running..."));
  });
});
