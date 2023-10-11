const mongoose = require("mongoose");
const schema = mongoose.Schema;
const collectionName = "product"
const modelSchema = new schema({
    title: { type: String, required: true },
    description: { type: String},
    price: { type: Number, required: true},
    cover: { type : String, required: true},
});

module.exports = mongoose.model(collectionName, modelSchema);