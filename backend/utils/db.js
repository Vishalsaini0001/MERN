const mongoose = require('mongoose');
const chalk = require('chalk');

const URI = process.env.MONGODB_URI;

const conectDB = async()=>{

    try {
      await mongoose.connect(URI)
        console.log(chalk.bgGreenBright('MongoDB connected!'));
    } catch (error) {
        console.error(chalk.bgRed("MongoDB Conntection failed!"))
        process.exit(0);
        
    }
}

module.exports = conectDB;