require("dotenv").config();
const mongoose = require("mongoose");
module.exports = connect = () => {
  return mongoose.connect(process.env.MongoURL);
};
