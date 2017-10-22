const route = require('express').Router();
const data = require('../mydata');

route.get('/', (req, res) => {
    console.log("Bandwidth API called");
    // return Bandwidth data
    data.getBW().then((BandwidthCollection) => {
     res.send(BandwidthCollection);
    })
});

route.post('/', (req, res) => {
    console.log("Bandwidth API called");
    data.addBW(req.body.bandwidth);
    res.redirect('/sniff/bandwidth');
});

module.exports = route;