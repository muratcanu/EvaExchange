const express = require('express');
const router = express.Router();
const models = require('../../../models');

router.get("/findById/:id", (req, res) => {
    models.portfolios.findAll({
        where: {
            id: req.params.id
        }
    }).then(portfolio => {
        if(portfolio.length == 0) {res.sendStatus(404)}
        else {res.status(200).json({status: 200, message: portfolio})}
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.get("/findByUserId/:userId", (req, res) => {
    models.portfolios.findAll({
        where: {
            userId: req.params.userId
        }
    }).then(portfolios => {
        if(portfolios.length == 0) {res.sendStatus(404)}
        else {res.status(200).json({status: 200, message: portfolios})}
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.post("/add", (req, res) => {
    models.portfolios.create(req.body).then(portfolio => {
        res.status(200).json({status: 200, message: portfolio})
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});


module.exports = router;