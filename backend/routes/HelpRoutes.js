const express = require("express");
const helpModel = require("../models/HelpDb");

const app = express();

app.get("/help", async (req, res) => {
  helpModel.find({}).exec((err, fdata) => {
    if (err) {
      return res.status(400).json({
        message: err,
      });
    }
    res.json({ fdata });
  });
});
app.post("/addhelp", async (req, res) => {
  console.log(req.body.name);
  const newHelp = new helpModel(req.body);
  try {
    await newHelp.save((err, data) => {
      if (err) {
        return res.status(400).json({
          err,
        });
      }
      res.json({
        data,
      });
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = app;
