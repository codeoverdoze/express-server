const mongoose = require("mongoose");

// Create a schema for products
const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;