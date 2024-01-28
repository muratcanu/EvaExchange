const express = require('express');
const router = express.Router();
const models = require('../../../models');

router.get("/findById/:id", (req, res) => {
    models.shares.findAll({
        where: {
            id: req.params.id
        }
    }).then(share => {
        if(share.length == 0) {res.sendStatus(404)}
        else {res.status(200).json({status: 200, message: share})}
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.get("/findAll", (req, res) => {
    models.shares.findAll().then(share => {
        if(share.length == 0) {res.sendStatus(404)}
        else {res.status(200).json({status: 200, message: share})}
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.get("/findByShortName/:shortName", (req, res) => {
    models.shares.findOne({
        where: {
            shortName: req.params.shortName
        }
    }).then(share => {
        if(share.length == 0) {res.sendStatus(404)}
        else {res.status(200).json({status: 200, message: share})}
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.post("/add", (req, res) => {
    models.shares.create(req.body).then(share => {
        res.status(200).json({status: 200, message: share})
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.put("/update/:id", (req, res) => {
    models.shares.update(
        req.body, {
            where: {
                id: req.params.id
            },
            returning: true,
            plain: true
        }
        ).then(result => {
            res.status(200).json({status: 200, message: result[1]})
        }).catch(err => {
            console.log(err)
            res.status(500).json({status: 500, message: err.message})
        });
});

module.exports = router;