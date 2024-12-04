const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

const authmiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorised!  Token not provided" });
  }
  try {
    const jwtToken = token.replace("bearer", "").trim();

    const decorded = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    const user = await userModel.findOne({ email: decorded.email });

    req.user = user;
    next()
  } catch (error) {
    return res.status(401).json({ message: "Unauthorised!" });
  }
};
module.exports = authmiddleware;
