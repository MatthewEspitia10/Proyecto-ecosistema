const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
  id: String,
  name: String,
  part_activity: String,
  id_type_activity: String
});

var Actividades = mongoose.model("Actividades", ActividadesSchema);
module.exports = Actividades;
