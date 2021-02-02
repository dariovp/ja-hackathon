'use strict';

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define(
        'user',
        {
            userId: {
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
        }
    );


    return users;
};