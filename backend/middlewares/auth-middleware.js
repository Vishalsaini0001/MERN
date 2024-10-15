const jwt = require('jsonwebtoken')

const authmiddleware = (req, res, next)=>{
     const token = req.header("Authorization")
     
     next()

}
module.exports = authmiddleware; 