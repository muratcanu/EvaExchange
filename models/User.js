'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true
            }
        }
    }, {
        indexes: [{
            fields: ['email'],
            unique: true,
          }]
    });
    return User;
};