const { StatusCodes } = require("http-status-codes");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "ping controller is up !!" });
}

async function addProblem(req, res, next) {
  try {
    console.log("incomming reqiest body : ", req.body);
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      err: {},
      data: newProblem,
    });
  } catch (err) {
    next(err);
  }
}

async function getProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched a new problem",
      err: {},
      data: response,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

function deleteProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

function updateProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingProblemController,
};

/**
 * res.status -> return the same response object with the status property set -> first it set the status property to specified code and return the same code
 * res.status().json -> return the same response object which has the status set but this time json to be returned is also set
 */
