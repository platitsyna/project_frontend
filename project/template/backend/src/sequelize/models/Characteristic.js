const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');
const Object = require('./Object').model;
const User = require('./User').model;

class Characteristic extends Model {}
Characteristic.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    owner: {
      type: DataTypes.STRING,
      references: {
        model: User,
        key: 'name',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description_plus: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description_minus: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'Characteristic' },
);

module.exports = {
  start: async function () {
    await Characteristic.sync({ force: true });
  },
  model: Characteristic,
};
