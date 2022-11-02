'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GuestBookEntry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GuestBookEntry.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GuestBookEntry',
  });
  return GuestBookEntry;
};