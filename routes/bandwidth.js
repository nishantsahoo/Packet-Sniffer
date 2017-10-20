const route = require('express').Router();

route.get('/', (req, res) => {
    console.log("Bandwidth API called");
});

module.exports = route;