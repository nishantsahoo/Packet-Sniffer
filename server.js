const express = require('express');
const bodyparser = require('body-parser');
const app = express(); // express object

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const BandwidthRoute = require('./routes/bandwidth'); // route for Bandwidth
app.use('/sniff/bandwidth', BandwidthRoute);
const IPRoute = require('./routes/ippack'); // route for Bandwidth
app.use('/sniff/ippack', IPRoute);

app.use('/',express.static(__dirname+"/public_static"));

// app listen
app.listen(9000, function () {
    console.log("Server started on http://localhost:9000");
});

// Make calls to this API and try getting the Python script working