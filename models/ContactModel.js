const { Schema, model } = require("mongoose");

const mySchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    contact: { type: Number, require: 0 },
    query: { type: String, require: true },
  },
  { timestamps: true });

module.exports = model("contact", mySchema);