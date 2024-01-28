const express = require('express');
const router = express.Router();
const models = require('../../../models');

router.get("/findById/:id", (req, res) => {
    models.trades.findAll({
        where: {
            id: req.params.id
        }
    }).then(trade => {
        if(trade.length == 0) {res.sendStatus(404)}
        else {res.status(200).json({status: 200, message: trade})}
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.get("/findAll", (req, res) => {
    models.trades.findAll().then(trades => {
        if(trades.length == 0) {res.sendStatus(404)}
        else {res.status(200).json({status: 200, message: trades})}
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.get("/findByPortfolioId/:portfolioId", (req, res) => {
    models.trades.findAll({
        where: {
            portfolioId: req.params.portfolioId
        }
    }).then(trades => {
        if(trades.length == 0) {res.sendStatus(404)}
        else {res.status(200).json({status: 200, message: trades})}
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.get("/findByShareId/:shareId", (req, res) => {
    models.trades.findAll({
        where: {
            shareId: req.params.shareId
        }
    }).then(trades => {
        if(trades.length == 0) {res.sendStatus(404)}
        else {res.status(200).json({status: 200, message: trades})}
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

router.post("/add", (req, res) => {
    const {operationType, portfolioId, shareId, quantity} = req.body;
    if (operationType != "BUY" && operationType != "SELL") {
        res.status(400).json({status: 400, message: "Invalid operation type. Valip operations are BUY, SELL"}).send();
    }
    models.portfolios.findOne({
        where: {
            id: portfolioId
        }
    }).then(portfolio => {
        models.shares.findOne({
            where: {
                id: shareId
            }
        }).then(share => {
            if (operationType == "SELL") {
                models.portfolios_shares.findAll({
                    where: {
                        portfolioId: portfolioId,
                        shareId: shareId
                    }
                }).then(portfolio_share => {
                    if(portfolio_share.length == 0) {
                        res.status(400).json({status: 400, message: "Selected portfolio does not include selected share"});
                    }
                    else {
                        const cost = share.price * quantity;
                        if (portfolio_share[0].quantity > quantity) {
                            // ADD MONEY TO PORTFOLIO
                            // REDUCE PORTFOLIO QUANTITY 
                            // INCREASE SHARE QUANTITY IN MARKET
                            updatePortfolioMoney(portfolio, cost);
                            updatePortfolioShareQuantity(portfolio_share[0], quantity * -1);
                            updateShareQuantity(share, quantity)
                            res.status(200).json({status: 200, message: "Sell operation success"});
                        } else if (portfolio_share[0].quantity == quantity) {
                            // ADD MONEY TO PORTFOLIO
                            // DELETE PORTFOLIO SHARE OBBJECT
                            // INCREASE SHARE QUANTITY IN MARKET
                            updatePortfolioMoney(portfolio, cost);
                            portfolio_share.destroy();
                            updateShareQuantity(share, quantity);
                            res.status(200).json({status: 200, message: "Sell operation success"});
                        } else {
                            res.status(400).json({status: 400, message: "Selected portfolio does not have enough selected share to sell"});
                        }
                    }
                }).catch(err => {
                    console.log(err)
                    res.status(500).json({status: 500, message: err.message})
                });
            } else {
                models.portfolios_shares.findAll({
                    where: {
                        portfolioId: portfolioId,
                        shareId: shareId
                    }
                }).then(portfolio_share => {
                    const cost = share.price * quantity;
                    if(portfolio.moneyAmount >= cost) {
                        if (share.quantity >= quantity) {
                            updatePortfolioMoney(portfolio, cost * -1);
                            updateShareQuantity(share, quantity * -1);
                            if (portfolio_share.length == 0) {
                                models.portfolios_shares.create({
                                    portfolioId: portfolio.id,
                                    shareId: share.id,
                                    quantity: quantity
                                }).then(ps => {})
                            } else updatePortfolioShareQuantity(portfolio_share[0], quantity);
                            res.status(200).json({status: 200, message: "Buy operation success"});
                        } else {
                            res.status(400).json({status: 400, message: "There are not enough selected share in market to buy"});
                        }
                    } else {
                        res.status(400).json({status: 400, message: "Selected portfolio does not have enough money to buy"});
                    }
                }).catch(err => {
                    console.log(err)
                    res.status(500).json({status: 500, message: err.message})
                });
            }
        }).catch(err => {
            console.log(err)
            res.status(500).json({status: 500, message: err.message})
        });
    }).catch(err => {
        console.log(err)
        res.status(500).json({status: 500, message: err.message})
    });
});

const updatePortfolioShareQuantity = async (portfolio_share, quantity) => {
    await portfolio_share.increment('quantity', {by: quantity});
}

const updatePortfolioMoney = async (portfolio, amount) => {
    await portfolio.increment('moneyAmount', {by: amount});
}

const updateShareQuantity = async (share, quantity) => {
    await share.increment('quantity', {by: quantity})
}

module.exports = router;