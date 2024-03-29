// ENV variables
require("dotenv").config()
const { MONGODBURI } = process.env

// Import and Connect Mongoose
const mongoose = require("mongoose")
const db = mongoose.connection

config = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}

mongoose.connect(MONGODBURI, config)

db.on("open", () => console.log("Connected to Mongo"))
  .on("close", () => console.log("Disconnected from Mongo"))
  .on("error", (err) => console.log(err))

module.exports = mongoose
