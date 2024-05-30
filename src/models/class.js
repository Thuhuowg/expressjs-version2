const { Sequelize, DataTypes } = require('sequelize');
const Major = require('./major');
const Course = require('./course');
const Student = require('./student');
const sequelize = new Sequelize('postgres://postgres:123456@127.0.0.1:5432/startpostgresql');
module.exports = (sequelize, Sequelize) => {
const Class = sequelize.define('Class', {
  malop:{
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique:true
  },
  tenlop: {
    type:DataTypes.STRING,
    allowNull:false,
    unique:true

  },
  manganh:{
    type:DataTypes.STRING,
    references:{
      model: Major,
      key: 'manganh',
    },
    allowNull: false,
  },
  siso:{
    type:DataTypes.INTEGER,
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
},
{
  sequelize,
  tableName: 'lop',
},
);

return Class;
}

