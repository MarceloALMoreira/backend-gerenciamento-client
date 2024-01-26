'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clients extends Model {
  
    static associate(models) {
      // define association here
    }
  }
  clients.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clients',
  });
  return clients;
};