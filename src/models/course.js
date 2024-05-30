'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    makhoahoc:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    tenkhoahoc: {
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
    tableName: 'khoahoc',
    sequelize,
    modelName: 'Course',
  });
  return Course;
};