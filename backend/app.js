require("dotenv").config();
const cors = require('cors')
const express = require("express");
const app = express();
const router = require("./router/auth-router");
app.use(express.json());
const conectDB = require("./utils/db");
const chalk = require("chalk");
const errorhandler = require("./middlewares/error-middleware");
 
const corsOptions = {
  origin: 'http://localhost:5173',
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true, 
}  
app.use(cors(corsOptions));

app.use("/api", router);
app.use(errorhandler)
 
conectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(chalk.cyan("Server is running..."));
  });
});
