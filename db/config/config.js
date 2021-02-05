'use strict';
module.exports = {
  development: {
    username: "postgres",
    password: "12345678",
    database: "moonlanding",
    host: "127.0.0.1",
    dialect: "postgres"
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
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
    },
  },
};