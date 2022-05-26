const mongoose = require("mongoose");

function connectMongoDB() {
  mongoose.connect(
    "mongodb+srv://farhang:Farhang6369@crud.wehl1.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
}

module.exports.connectMongoDB = connectMongoDB;
