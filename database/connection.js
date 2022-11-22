const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  define: {
  timestamps:false  
  }
});
  
  try {
  sequelize.authenticate();
    console.log('La conexion se establecio correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
  module.exports = sequelize;