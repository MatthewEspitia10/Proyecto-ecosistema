const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tipo_usuarioSchema = new Schema({
  id: String,
  name: String,
  last_name: String,
  email: String,
  user_type: String
});

var tipo_usuario = mongoose.model("tipo_usuario", tipo_usuarioSchema);
module.exports = tipo_usuario;
