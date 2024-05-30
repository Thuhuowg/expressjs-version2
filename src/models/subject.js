const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:123456@127.0.0.1:5432/startpostgresql');
module.exports = (sequelize, Sequelize) => {
  const Subject = sequelize.define('Subject',{
    mamonhoc:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    tenmonhoc: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    sotiet:{
      type:DataTypes.INTEGER,
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
    tableName:'monhoc',
    sequelize,
    modelName: 'Subject',
  });
  return Subject;
};