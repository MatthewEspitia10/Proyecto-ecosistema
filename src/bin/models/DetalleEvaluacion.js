const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetalleEvaluacionSchema = new Schema({
  id: String,
  ask: String,
  desc_ask: String,
  opt_one: String,
  opt_two: String,
  opt_three: String,
  opt_answ_correct: String
});

var DetalleEvaluacion = mongoose.model("DetalleEvaluacion", DetalleEvaluacionSchema);
module.exports = DetalleEvaluacion;
