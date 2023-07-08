const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name: String,
  last_name: String,
  email: String,
  password: String,
  id_type_user: String
});

var Users = mongoose.model("Users", UsersSchema);
module.exports = Users;
