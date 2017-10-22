const Sequelize = require('sequelize');
const db = new Sequelize('sniffme', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 1000
    }
});

const IP = db.define('iptable', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    version: Sequelize.STRING,
    ip_hlen: Sequelize.INTEGER,
    ttl: Sequelize.INTEGER,
    protocol: Sequelize.STRING,
    source_address: Sequelize.STRING,
    destination_address: Sequelize.STRING
}); // used to define the Table Product

db.sync({}); // executes db.define

const Bandwidth = db.define('bandwidthtable', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bandwidth: Sequelize.INTEGER
}); // used to define the Table

db.sync({}); // executes db.define

function getIP() { return IP.findAll(); } // end of the function definition getIP

function getBW() { return Bandwidth.findAll(); } // end of the function definition getIP

function addBW(bandwidthVal) {
    return Bandwidth.create(
        {
            bandwidth: bandwidthVal
        });
}

module.exports = {
    getIP,
    getBW,
    addBW
};