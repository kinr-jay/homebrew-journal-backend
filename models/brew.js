const { Schema, model } = require("mongoose")

const brewSchema = new Schema(
  {
    name: String,
    style: String,
    grains: [String],
    hops: [String],
    description: String,
  },
  { timestamps: true }
)

const Brew = model("Brew", brewSchema)

module.exports = Brew
