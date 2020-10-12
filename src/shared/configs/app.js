const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  ZONE: process.env.ZONE,
  PORT: process.env.PORT,
};