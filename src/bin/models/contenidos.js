const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContenidosSchema = new Schema({
  id: String,
  name_content: String,
  part_content: String,
  id_user: String,
  id_type_content: String
});

var Contenidos = mongoose.model("Contenidos", ContenidosSchema);
module.exports = Contenidos;
