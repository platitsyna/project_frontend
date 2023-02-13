const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres:post1415@localhost');
// sudo systemctl start postgresql или sudo systemctl restart postgresql

module.exports = {
  start: async function () {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  },
  close: function () {
    sequelize.close();
  },
  use: function () {
    return sequelize;
  },
};
