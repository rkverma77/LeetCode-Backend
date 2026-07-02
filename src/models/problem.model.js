const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title cannot be empty"],
  },
  description: {
    type: String,
    required: [true, "Description Cannot be empty"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium ", "hard"],
    required: [true, "Difficulty cannot be empty"],
    default: "easy",
  },
  testCases: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String,
        require: true,
      },
    },
  ],
  editorial: {
    type: String,
  },
});

const Probelem = mongoose.model('Problem' , problemSchema);
module.exports = Probelem;
