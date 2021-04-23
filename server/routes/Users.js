const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/", (req, res) => {
  const { fullname, gender, username, password, role } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      fullname: fullname,
      gender: gender,
      username: username,
      password: hash,
      role: role,
    })
      .then(() => {
        res.json("USER REGISTERED");
      })
      .catch((err) => {
        err && res.status(400).json({ err: err });
      });
  });
});

module.exports = router;
