const { Sequelize, DataTypes } = require('sequelize');
const Subject = require('./subject');
const sequelize = new Sequelize('postgres://postgres:123456@127.0.0.1:5432/startpostgresql');
const Student = require('./student');

module.exports = (sequelize, Sequelize) => {
  const Score = sequelize.define('Score',{
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false // Đảm bảo trường 'id' không được null
    },
    diemthi:{
      type: DataTypes.FLOAT,
      allowNull: false,
      primaryKey: true,
    },
    diemquatrinh: {
      type:DataTypes.FLOAT,
      allowNull:false,
    },
    
    diemtonghe10:{
      type: DataTypes.FLOAT,
      allowNull:false,
      get() {
        return Math.round(this.getDataValue('diemtonghe10') * 100) / 100; // Làm tròn số với 2 chữ số thập phân
      },
      set(value) {
        this.setDataValue('diemtonghe10', value);
      }
    },
    hocky:{
      type: DataTypes.STRING
    },
    masv:{
      type:DataTypes.STRING,
      references:{
        model: Student,
        key: 'masv',
      },
      allowNull: false,
    },
    mamonhoc:{
      type:DataTypes.STRING,
      references:{
        model: Subject,
        key: 'mamonhoc',
      },
      allowNull: false,
    },
    heso:{
      type: DataTypes.FLOAT,
      allowNull:false
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
    tableName:'bangdiem',
    sequelize,
    modelName: 'Score',
  });
  return Score;
};