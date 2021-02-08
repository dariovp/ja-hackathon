'use strict';

const path = require('path');
const { Sequelize } = require('sequelize');
const env ='development';
const config = require(__dirname + '/../config/config.js')[env];

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
/*
let sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});*/
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

/*
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}*/

module.exports = sequelize;