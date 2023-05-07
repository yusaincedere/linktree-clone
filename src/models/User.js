const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },

  photo_url: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
    tableName:'users',
    underscored: true
});

export default User;