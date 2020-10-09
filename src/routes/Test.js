const express = require("express");

const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("GET");
});
Router.post("/", (req, res) => {
  res.send("POST");
});
Router.put("/", (req, res) => {
  res.send("PUT");
});
Router.delete("/", (req, res) => {
  res.send("DELETE");
});

module.exports = Router;
