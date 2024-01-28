'use strict';
module.exports = (sequelize, DataTypes) => {
    const Share = sequelize.define('shares', {
        longName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        shortName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                notEmpty: true,
                min: 3,
                max: 3
            }
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
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
    });
    Share.associate = function(models) {
        Share.belongsToMany(models.portfolios, {through: models.portfolios_shares});
    }
    return Share;
};