const { Schema, model } = require("mongoose")

const brewSchema = new Schema(
  {
    name: { type: String, required: true },
    style: { type: String, required: true },
    grains: [{ type: String, required: true }],
    hops: [{ type: String, required: true }],
    description: { type: String, required: true },
    img: { type: String, required: true },
    number: Number,
  },
  { timestamps: true }
)

const Brew = model("Brew", brewSchema)

module.exports = Brew
