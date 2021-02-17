'use strict';


const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../connection/index');

const User = sequelize.define(
	'User',
	{
		id: {
			type: DataTypes.INTEGER, // Tipo de dato.
			primaryKey: true, // Primary Key set.
			allowNull: false, // No nulleable.
			autoIncrement: true
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
		points: {
			type: Sequelize.INTEGER,
			defaultValue: 0,
			allowNull: false,
		},
		verified: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	}, 
	{
		tableName: 'User'
	}
);


module.exports = User;