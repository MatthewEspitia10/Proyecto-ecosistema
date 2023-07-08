const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluacionSchema = new Schema({
  id: String,
  name: String,
  question_type: String,
  response_type: String,
  response_opt: String,
  qualification: String
});

var Evaluacion = mongoose.model("Evaluacion", EvaluacionSchema);
module.exports = Evaluacion;
