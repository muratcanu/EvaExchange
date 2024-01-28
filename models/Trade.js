'use strict';
module.exports = (sequelize, DataTypes) => {
    const Trade = sequelize.define('trades', {
        portfolioId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        shareId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        operationType: {
            type: DataTypes.ENUM('BUY', 'SELL'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    Trade.associate = function(models) {
        Trade.belongsTo(models.portfolios, {foreignKey: 'portfolioId', as: 'portfolio'});
        Trade.belongsTo(models.shares, {foreignKey: 'shareId', as: 'share'});
    }
    return Trade
};