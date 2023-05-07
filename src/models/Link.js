const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require("./user")

const Link = sequelize.define('Link', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false
  },
},
{
    tableName:'links',
    underscored: true
});

User.hasMany(Link);
Link.belongsTo(User);

export default Link;
