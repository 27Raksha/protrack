const { Sequelize } = require('sequelize');
require('dotenv').config();



const sequelize = new Sequelize('newschema', 'root', 'Raksha#2707', {
  
  dialect: 'mysql',
  paranoid: true
});


 
module.exports = sequelize;



