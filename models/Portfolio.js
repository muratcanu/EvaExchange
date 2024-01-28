'use strict';
module.exports = (sequelize, DataTypes) => {
    const Portfolio = sequelize.define('portfolios', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        moneyAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });
    Portfolio.associate = function(models) {
        Portfolio.belongsTo(models.users, {foreignKey: 'userId', as: 'user'});
        Portfolio.belongsToMany(models.shares, {through: models.portfolios_shares});
    }
    return Portfolio;
};