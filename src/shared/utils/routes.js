module.exports.createRoute = (path, routers) => {
  return {
    path,
    routers,
  };
};

module.exports.useCreateRoute = (path, routers) => {
  return {
    path,
    routers,
  };
};
