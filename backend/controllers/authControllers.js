import { body, matchedData, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { user } from "../models/usermodel.js";
import { createToken } from "../utils/createToken.js";
import mongoose from "mongoose";

const validateUser = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Please Enter An Email")
    .isEmail()
    .withMessage("Value should be an email"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Please Enter An Password")
    .isLength({ min: 1, max: 10 })
    .withMessage("Password should be atleast 8 characters long"),
];

export const signUpController = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(req.body);
      res.status(400).send(errors.array());
    }
    try {
      const { email, password } = matchedData(req);

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.find().then((users) => {
        users.forEach(async (user) => {
          const matchPassword = await bcrypt.compare(password, user.password);
          if (user.email === email && matchPassword) {
            throw new Error("User Already Exists!");
          }
        });
      });
      
      const User = new user({ email, password: hashedPassword });
      // User.save()
      // createToken(User.id, res);
      res.send("Done");
    } catch (err) {
      res.send(`<h1>${err}</h1>`);
    }
  },
];

export const loginContoller = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).send(errors.array());
    }
    const { email, password } = matchedResult(req);
    console.log("email: ", email, " password: ", password);
    res.send("email: ", email, " password: ", password);
  },
];
