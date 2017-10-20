const express = require('express');
const bodyparser = require('body-parser');
const app = express(); // express object

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// const ProductsRoute = require('./routes/products'); // route for products
// app.use('/myapi/products/', ProductsRoute);
const BandwidthRoute = require('./routes/bandwidth'); // route for Bandwidth
app.use('/sniff/bandwidth', BandwidthRoute);
app.use('/',express.static(__dirname+"/public_static"));

// app listen
app.listen(9000, function () {
    console.log("Server started on http://localhost:9000");
});