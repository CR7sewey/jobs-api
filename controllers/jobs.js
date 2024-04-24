const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");
const NotFound = require("../errors/not-found-error");

const getAllJobs = async (req, res) => {
  const all_jobs = await Job.find({ createdBy: req.user._id }).sort({
    createdBy: -1,
  });
  return res.status(StatusCodes.OK).json({ all_jobs });
};

const getJob = async (req, res) => {
  const createdBy = req.user._id;
  const { id } = req.params;
  const job = await Job.findOne({ createdBy, _id: id });
  if (!job) {
    throw new NotFound("You dont have a job registered with this id");
  }
  return res.status(StatusCodes.OK).json({ job });
};

const createJob = async (req, res) => {
  console.log(req.user);
  const { _id: id } = req.user;
  if (!id) {
    throw new Error("Well not supposed to be here!");
  }
  const new_job = await Job.create({ ...req.body, createdBy: id });

  return res.status(StatusCodes.CREATED).json({ new_job });
};

const updateJob = async (req, res) => {
  return res.send("Get Job 3");
};

const deleteJob = async (req, res) => {
  return res.send("Get Job 4");
};

module.exports = { getJob, getAllJobs, createJob, updateJob, deleteJob };
