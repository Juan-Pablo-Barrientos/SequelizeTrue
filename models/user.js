const {DataTypes } = require('sequelize');
const sequelize = require("../database/connection");
const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    name:{
        type:DataTypes.STRING
    }
})

module.exports = User;
