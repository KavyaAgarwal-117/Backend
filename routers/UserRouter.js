const express = require("express");
const Model = require("../models/UserModels");

const router = express.Router();

const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
require("dotenv").config();

router.post("/add", (req, res) => {
  console.log(req.body);
  //res.send('response from user add');
  new Model(req.body)
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// : denotes url parameter
router.get("/getbycity/:city", (req, res) => {
  Model.find({ city: req.params.city })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getbyemail/:email", (req, res) => {
  Model.find({ email: req.params.email })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/authenticate", (req, res) => {
  const { email, password } = req.body;
  Model.findOne({ email, password })
    .then((result) => {
      if (result) {
        //details match then
        //create token
        const { _id, name } = result;

        jwt.sign(
          { _id, name },
          process.env.JWT_SECRET,
          { expiresIn: "1h" },
          (err, token) => {
            if (err) {
              console.log(err);
              res.status(500).json(err);
            } else {
              res.status(200).json({ token });
            }
          },
        );
      } else {
        //details doesn't match
        res.status(403).json({ message: "Invalid Credentials" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
