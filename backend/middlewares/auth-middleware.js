const jwt = require('jsonwebtoken')

const authmiddleware = (req, res, next)=>{
     const token = req.header("Authorization")
     console.log("token is....",token)
     next()

}
module.exports = authmiddleware; 