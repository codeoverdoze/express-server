const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const { request } = require('express');
const DBConfig = require("./config/database")
const Product = require("./app/product");

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


// Connect to mongoDB 
mongoose.connect(DBConfig.DBUri).then(() => {
    console.log('Connection to my Local Mongo Database Successful');
})




app.post('/product', (req, res) => {
    
    const newProduct = new Product(req.body);
    newProduct.save().then((data) => {
        res.json(data);
    })

});


app.get('/products', (req, res) => {
    Product.find().then((data) => {
        res.json(data);
    });
});

app.get('/customers', (req, res) => {
    res.json(customers);
});


app.listen(3000, ()=> {
    console.log("Up and Running")
})