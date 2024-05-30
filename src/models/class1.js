'use strict';
const {
  Model
} = require('sequelize');
const Major = require('./major');
const Course = require('./course');
const Student = require('./student');

module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.hasMany(models.Student, { foreignKey:'malop' });
    }
  }
  Class.init({
    malop:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    tenlop: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    manganh:{
      type:DataTypes.STRING,
      references:{
        model: Major,
        key: 'manganh',
      },
      allowNull: false,
    },
    makhoahoc:{
      type:DataTypes.STRING,
      references:{
        model: Course,
        key: 'makhoahoc',
      },
      allowNull: false,
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
    tableName: 'lop',
    sequelize,
    modelName: 'Class',
  });
  
  return Class;
};