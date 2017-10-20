const express = require('express');
const app = express(); // express object
// const ProductsRoute = require('./routes/products'); // route for products
// app.use('/myapi/products/', ProductsRoute);
// const CartRoute = require('./routes/cart'); // route for cart
// app.use('/myapi/cart', CartRoute);
app.use('/',express.static(__dirname+"/public_static"));

// app listen
app.listen(9000, function () {
    console.log("Server started on http://localhost:9000");
});