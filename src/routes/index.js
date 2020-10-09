const { createRouter } = require("../utils/routes");
const TestRoutes = require("./Test");

const useRoutes = () => ({
  test: createRouter("/test", TestRoutes),
});

module.exports = useRoutes;
