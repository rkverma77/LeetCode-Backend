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

async function getProblem(req, res, next) {
  try {
    // console.log(`from problem.controller : ${req.params.id}`);

    const response = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched a problem",
      err: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();

    // added manually : since if the record is empty -> then the response is empty array . since the db.find() return an array of documents
    if (response.length == 0) {
      return res.status(200).json({
        success: true,
        message: "No problems found",
        data: [],
      });
    }
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched a problems",
      err: {},
      data: response,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const response = await problemService.deleteProblemById(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted a problems",
      err: {},
      data: response,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
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
