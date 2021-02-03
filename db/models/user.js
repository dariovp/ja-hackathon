'use strict';


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/index');

const User = sequelize.define(
    'User',
    {
        id: {
            type: Sequelize.STRING, // Tipo de dato.
            primaryKey: true, // Primary Key set.
            allowNull: false, // No nulleable.
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        mentor: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        points: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
            allowNull: false,
        }
    }, 
    {
        tableName: 'User'
    }
);


module.exports = User;