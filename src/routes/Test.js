const express = require("express");
const { useTestController } = require("../controllers/Test");

const Router = express.Router();
const { getTests, createTest, updateTest, deleteTest } = useTestController();

Router.get("/", getTests);
Router.post("/", createTest);
Router.put("/", updateTest);
Router.delete("/", deleteTest);

module.exports = Router;
