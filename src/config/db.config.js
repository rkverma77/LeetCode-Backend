const mongoose = require("mongoose");
const { MONGO_URI, NODE_ENV } = require("./server.config");

async function connectToDb() {
  try {
    if (NODE_ENV == "development") {
      await mongoose.connect(MONGO_URI);
    } else if (NODE_ENV == "production") {
        // connect to production DB ; 
    }
  } catch (err) {
    console.log("Unable to connect to the DB server");
    console.log(err);
  }
}

module.exports = connectToDb;
