const route = require('express').Router();

route.get('/', (req, res) => {
    console.log("IP API called");
});

module.exports = route;