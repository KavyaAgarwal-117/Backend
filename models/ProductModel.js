const { Schema, model } = require("mongoose");

const mySchema = new Schema(
  {
    title: { type: String, require: true },
    brand: { type: String, require: true },
    price: { type: Number, default: 0 },
    image: { type: String },
  },
  { timestamps: true });

module.exports = model("products", mySchema);
