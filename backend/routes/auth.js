const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a user using: POST "/api/auth/createuser"
router.post(
  "/createuser",
  [
    body("name", "Please enter valid name").isLength({ min: 3 }),
    body("email", "Please enter valid email id").isEmail(),
    body("password", "Password must be of atleast 5 length").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there is error then return bad request and error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether user with this emial exists already
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(400)
        .json({ error: "Sorry user with this email already exists" });
    }
    user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    // .then((user) => res.json(user))
    // .catch((err) => {
    //   console.log(err);
    //   res.json({
    //     error: "Please enter unique value for email",
    //     message: err.message,
    //   });
    // });
    res.json({ Nice: "nice" });
  }
);

module.exports = router;
