const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres:post1415@localhost');

const User = require('./User').model;
const Characteristic = require('./Characteristic').model;

class Object extends Model {}

Object.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
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
  { sequelize, modelName: 'Object' },
);

module.exports = {
  start: async function () {
    await Object.sync({ force: true });
  },
  model: Object,
};
