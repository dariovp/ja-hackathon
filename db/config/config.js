'use strict';
module.exports = {
  development: {
    username: "hylsbtewohsbvf",
    password: "9f9c913865d773ea6d717abbf7f65444ee4739ef150dddba6ef292f18acb7757",
    database: "d3bvigi4121ji3",
    host: "ec2-54-162-119-125.compute-1.amazonaws.com",
    dialect: "postgres",
    port :  5432,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    username: "hylsbtewohsbvf",
    password: "9f9c913865d773ea6d717abbf7f65444ee4739ef150dddba6ef292f18acb7757",
    database: "d3bvigi4121ji3",
    host: "ec2-54-162-119-125.compute-1.amazonaws.com",
    dialect: "postgres",
    port :  5432,
  },
};