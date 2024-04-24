const Job = require("../models/Job");
const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (req, res) => {
  const all_jobs = await Job.find({});
  return res.status(200).json({ all_jobs });
};

const getJob = async (req, res) => {
  return res.send("Get Job 1");
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
