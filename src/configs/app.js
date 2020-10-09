const dotenv = require("dotenv");
dotenv.config();

const useConfig = {
  ZONE: process.env.ZONE,
  PORT: process.env.PORT,
};

module.exports = useConfig;
