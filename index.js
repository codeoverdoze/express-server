const express = require('express')
const app = express()

const products = [
    {
        id: 1,
        name: "iPhone 13 Pro Max",
        category: "Electronics",
        price: 9900,
        currency: "USD",
        image: "",
        stars: 4,
        review: "This is an amazing product!"
    },
    {
        id: 2,
        name: "Butter Bread",
        category: "Food",
        price: 5,
        currency: "USD",
        image: "",
        stars: 5,
        review: "The best bread i have ever had"
    }
];

const customers = [
    {
        id: 1,
        name: "Reagan Kofi Marfo",
        gender: "Male"
    },
    {
        id: 2,
        name: "Vera Ama Pomaa",
        gender: ",Female"
    },
    {
        id: 3,
        name: "Mark Atta-Mensah",
        gender: "Male"
    }
];
 
app.get('/', function (req, res) {
  res.json({message: "Hello World"})
})

app.get('/products', (req, res) => {
    res.json(products);
});

app.get('/customers', (req, res) => {
    res.json(customers);
});

app.get('/customers/:customerID', (req, res) => {
    const { customerID } = req.params;
    console.log(`The customer id is ${customerID}`)
    res.json(customers[customerID - 1]);
});
 
app.listen(3000, ()=> {
    console.log("Up and Running")
})