'use strict';

const fs = require('fs');
const path = require('path');
const {Sequelize} = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};
const sequelize = require('../connection/index');

/* Custom handler for reading current working directory */
const models = process.cwd() + '/db/models/' || __dirname;


// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config,
//   );
// }

// console.log("sequelize: ", sequelize)

/* fs.readdirSync(__dirname) */
fs.readdirSync(models)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    
    /* const model = sequelize["import"](path.join(__dirname, file)); */
    // console.log("Lo que rompe: ", require(`./${file}`))
    const model = require(`./${file}`)
    // console.log("before")
    sequelize[model.name] = model;
  });

Object.keys(sequelize).forEach(modelName => {
  if (sequelize[modelName].associate) {
    sequelize[modelName].associate(sequelize);
  }
});


// console.log("DB: ", sequelize)


// sequelize.sync({ force: true })

sequelize.sequelize = sequelize;

sequelize.Sequelize = Sequelize;


module.exports = sequelize;