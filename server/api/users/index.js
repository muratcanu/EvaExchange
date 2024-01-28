const express = require('express');
const router = express.Router();
const models = require('../../../models');

router.get("/findById/:id", (req, res) => {
    models.users.findAll({
        where: {
            id: req.params.id
        }
    }).then(user => {
        if(user.length == 0) {res.sendStatus(404)}
        else {res.status(200).json({status: 200, message: user})}
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.post("/add", (req, res) => {
    models.users.create(req.body).then(user => {
        res.status(200).json({status: 200, message: user})
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

module.exports = router;