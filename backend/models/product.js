import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    "name": {type: String},
    "price": {type: Number},
    "stock": {type: Number},
    "description": {type: String},
    "registerDate": {type: Date, default: Date.now},
    "visible": {type: Boolean, default: true}
});

const product = mongoose.model("products", productSchema);

export default product;