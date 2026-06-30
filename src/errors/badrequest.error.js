const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class BadRequest extends BaseError {
  constructor(propertyName , details) {
    super("BadrRequest" , StatusCodes.BAD_REQUEST , `Invalid structure for ${propertyName} provided` , details);
  }
}

module.exports = BadRequest ; 