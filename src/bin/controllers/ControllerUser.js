var mongoose = require("mongoose");

class Database {
  constructor() {}

  async connect() {
    try {
      await mongoose.connect(
        //mongodb+srv://mattew:mattew2023@proyecto.56imcgf.mongodb.net/PROYECTO?retryWrites=true&w=majority
        "mongodb+srv://mattew:mattew2023@proyecto.rvkwlki.mongodb.net/?retryWrites=true&w=majority", 

        { useNewUrlParser: true }
      );
      console.log("Connected databases.");
    } catch (e) {
      console.error(e);
    }
  }
}

exports.database = new Database();