const express = require("express");
const { problemController } = require("../../controllers");

const problemRouter = express.Router();

// if any request comes and routes continues with /ping , we map it to pingProblemController
problemRouter.get('/ping' , problemController.pingProblemController);

problemRouter.get("/", problemController.getProblems);
problemRouter.post("/", problemController.addProblem);
problemRouter.delete('/:id' , problemController.deleteProblem);
problemRouter.put('/:id' , problemController.updateProblem);

module.exports =  problemRouter;
