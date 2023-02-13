const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Object = require('./Object');
const User = require('./User');
const Characteristic = require('./Characteristic');

class Estimation extends Model {}
Estimation.init(
  {
    object: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Object,
        key: 'id',
      },
    },
    characteristic: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Characteristic,
        key: 'id',
      },
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'Estimation' },
);

module.exports = {
  start: async function () {
    await Estimation.sync({ force: true });
  },
  model: Estimation,
};
