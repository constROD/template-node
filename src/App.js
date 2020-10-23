const express = require("express");
const ROUTES = require("./routes");

const app = express();

// Routes
const { test } = ROUTES;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.use(test.url, test.controller);

module.exports = app;
