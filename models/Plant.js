const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Plant model
class Plant extends Model { }

// create fields/columns for Post model
Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // name of plant
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // recommended sunlight
    sunlight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // recommended water
    water: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // date last watered
    date_water: {
      type: DataTypes.DATE,
      validate: {
        isDate: true
      }
    },
    // plant owner id
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'plant'
  }
);

module.exports = Plant;