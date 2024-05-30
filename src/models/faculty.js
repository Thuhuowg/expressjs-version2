'use strict';
const {
  Model
} = require('sequelize');
const Major = require('./major');
module.exports = (sequelize, DataTypes) => {
  class Faculty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Faculty.init({
    makhoa:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    tenkhoa: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    createdAt: {
      type:DataTypes.TIME,
      allowNull:false,
      field: 'created_at'
    },
    updatedAt: {
      type:DataTypes.DATE,
      field:'updated_at',
    },
    deleted_at: DataTypes.DATE,
    // password: DataTypes.STRING
  }, {
    tableName:'khoa',
    sequelize,
    modelName: 'Faculty',
  });
  // Faculty.belongsTo(Major,{foreignKey: 'makhoa'});
  return Faculty;
};