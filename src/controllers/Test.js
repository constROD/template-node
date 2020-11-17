module.exports.useTestController = () => {
  const getTests = (req, res) => {
    res.status(200).json({ method: "GET", params: req.query });
  };
  const createTest = (req, res) => {
    res.status(200).json({ method: "POST", params: req.query });
  };
  const updateTest = (req, res) => {
    res.status(200).json({ method: "PUT", params: req.query });
  };
  const deleteTest = (req, res) => {
    res.status(200).json({ method: "DELETE", params: req.query });
  };

  return {
    getTests,
    createTest,
    updateTest,
    deleteTest,
  };
};
