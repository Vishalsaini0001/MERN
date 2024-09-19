const mongoose = require('mongoose');

// const URI = "mongodb://localhost:27017/technical";
const URI = process.env.MONGODB_URI;

const conectDB = async()=>{

    try {
      await mongoose.connect(URI)
        console.log("MongoDB connected!")
    } catch (error) {
        console.error("MongoDB Conntection failed!")
        process.exit(0);
        
    }
}

module.exports = conectDB;