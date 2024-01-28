'use strict';
module.exports = (sequelize, DataTypes) => {
    const PortfolioShare = sequelize.define('portfolios_shares', {
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
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })
    return PortfolioShare;
};