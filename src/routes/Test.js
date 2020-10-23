const express = require("express");

const Router = express.Router();

Router.get("/", async (req, res) => {
  res.status(200).json({ method: "GET", params: req.query });
});

Router.post("/", async (req, res) => {
  res.status(200).json({ method: "POST", params: req.query });
});

Router.put("/", async (req, res) => {
  res.status(200).json({ method: "PUT", params: req.query });
});

Router.delete("/", async (req, res) => {
  res.status(200).json({ method: "DELETE", params: req.query });
});

module.exports = Router;
