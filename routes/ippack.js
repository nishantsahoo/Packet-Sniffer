const route = require('express').Router();
const data = require('../mydata');

route.get('/', (req, res) => {
    console.log("IP API called");
    // return IP Data
    data.getIP().then((IPCollection) => {
    	res.send(IPCollection);
    })
});

module.exports = route;