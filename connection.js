require("dotenv").config();

const mongoose = require("mongoose");

console.log(process.env.MONGODB_URL);
let mongoDB = process.env.MONGODB_URL;

mongoose.connect(mongoDB);

module.exports = mongoose.connection;
