'use strict';
const {
  Model
} = require('sequelize');
const Faculty = require('./faculty');

module.exports = (sequelize, DataTypes) => {
  class Major extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Major.init({
    manganh:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique:true
    },
    tennganh: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    makhoa:{
      type:DataTypes.STRING,
      references:{
        model: Faculty,
        key: 'makhoa',
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
   
    // password: DataTypes.STRING
  }, {
    tableName: 'nganhhoc',
    sequelize,
    modelName: 'Major',
  });
  // Major.hasMany(Faculty,
  //   {
  //     foreignKey: 'makhoa',
  //   });
  return Major;
};