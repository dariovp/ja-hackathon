'use strict';

const path = require('path');
const { Sequelize } = require('sequelize');
const env ='development';
const config = require(__dirname + '/../config/config.js')[env];

const { Client } = require('pg');

const client = new Client({
	connectionString: process.env.DATABASE_URL
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
	if (err) throw err;
	for (let row of res.rows) {
		console.log(JSON.stringify(row));
	}
	client.end();
});

const sequelize = new Sequelize({
	database: "d3bvigi4121ji3",
	username: "hylsbtewohsbvf",
	password: "9f9c913865d773ea6d717abbf7f65444ee4739ef150dddba6ef292f18acb7757",
	host: "ec2-54-162-119-125.compute-1.amazonaws.com",
	port: 5432,
	dialect: "postgres",
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false 
		}
	},
});


module.exports = sequelize;