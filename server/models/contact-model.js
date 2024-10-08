const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name: String,
    email:{
        type:String,
        required:true
    },
    message:{
        type: String,
        required:true
    }
})

const message = mongoose.model("message", contactSchema)
module.exports = message;