const getAllJobs = async (req, res) => {
  return res.send("Get Job");
};

const getJob = async (req, res) => {
  return res.send("Get Job 1");
};

const createJob = async (req, res) => {
  return res.json(req.user);
};

const updateJob = async (req, res) => {
  return res.send("Get Job 3");
};

const deleteJob = async (req, res) => {
  return res.send("Get Job 4");
};

module.exports = { getJob, getAllJobs, createJob, updateJob, deleteJob };
