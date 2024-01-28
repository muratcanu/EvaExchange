const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    database: 'evaexchange',
    host: 'localhost',
    port: '5432',
    username: 'admin',
    password: '1234'
})

const db = require('../models');

sequelize.authenticate().then(
    () => {
        console.log("Database connected...");
        db.sequelize.sync({force: false, alter: false}).then(
            (req) => {
                console.log("Database synchronised successfully")
                app.listen(PORT, () => {
                    console.log(`Server listening on ${PORT}`);
                });
            error =>{console.log("Database synchronization error", error)}
        })
    },
    error=>{console.log("Database connection error", error)}
)

app.use(express.json())

const users = require('./api/users');
app.use('/api/users', users);

const portfolios = require('./api/portfolios');
app.use('/api/portfolios', portfolios);

const shares = require('./api/shares');
app.use('/api/shares', shares);

const trades = require('./api/trades');
app.use('/api/trades', trades);

module.exports = db;