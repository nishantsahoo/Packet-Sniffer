const route = require('express').Router();
const data = require('../mydata');

route.get('/', (req, res) => {
    console.log("IP API called");
    // return IP Data
    data.getIP().then((IPCollection) => {
    	res.send(IPCollection);
    })
});

route.post('/', (req, res) => {
    console.log("IP API called");
    console.log("Body", req.body);
    data.addIP(req.body);
    res.redirect('/sniff/ippack');
});

module.exports = route;