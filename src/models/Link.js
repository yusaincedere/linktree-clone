const { DataTypes } = require('sequelize');
import { sequelize } from '@/repository/db';
import User from "./User"

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
    underscored: true,
    timestamps: false,
});


Link.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Link, { foreignKey: 'user_id' });


export default Link;
