const { Schema, model } = require("mongoose");

const mySchema = new Schema(
  {
    title: { type: String, require: true },
    brand: { type: String, require: true },
    price: { type: Number, require: true },
    image: { type: String, require: true },
    category: { type: String, default: "Unknown" },
  },
  { timestamps: true },
);

module.exports = model("products", mySchema);
