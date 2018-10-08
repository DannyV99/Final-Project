const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pageSchema = new Schema({
  imageURL: { type: String },
  paragraph: { type: String },
  options: [{ type: String }]
});

const Page = mongoose.model("Page", pageSchema);

module.exports = Page;
