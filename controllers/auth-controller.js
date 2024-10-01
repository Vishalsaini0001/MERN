const express = require("express");
const userModel = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const home = async (req, res) => {
  try {
    res.send("Welcome!");
  } catch (error) {
    console.log("error:", error);
  }
};
const register = async (req, res) => {
  try {
    let { username, email, phone, password } = req.body;
    const exist = await userModel.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "user already exists!" });
    }

    const hash_password = await bcrypt.hash(password, 10);

    const createduser = await userModel.create({
      username,
      email,
      phone,
      password: hash_password,
    });
    const token = jwt.sign({ email: createduser.email }, "secret");
    res.cookie("token", token);
    res.status(200).json({ CreatedSuccessfully: createduser });
  } catch (error) {
    next(error)
  }
};

const login = async (req, res) => {
  let { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(500).json({ message: "Invalid email address" });
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (!result) {
        res.json({ message: "Incorrect Password" });
      } else {
        res.json({ message: "Login succesfully" });
      }
    });
  } catch (error) {
  
   
    next(error)
  }
};

module.exports = { home, register, login };
