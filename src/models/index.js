'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}



db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user = require("./user.js")(sequelize, Sequelize);
db.subject = require("./subject.js")(sequelize,Sequelize);
db.major=require("./major.js")(sequelize,Sequelize);
db.class=require("./class.js")(sequelize,Sequelize);
db.score=require("./score.js")(sequelize,Sequelize);
db.faculty=require("./faculty.js")(sequelize,Sequelize);
db.course=require("./course.js")(sequelize,Sequelize);
db.student=require("./student.js")(sequelize,Sequelize);

db.class.hasMany(db.student,{ as: 'students', foreignKey: 'malop'});
db.student.belongsTo(db.class,{ as: 'classes', foreignKey: 'malop' });


db.student.hasMany(db.score, {foreignKey:'masv'});
db.score.belongsTo(db.student, {as:'students', foreignKey:'masv'});
db.score.belongsTo(db.subject, {as: 'subjects',foreignKey:'mamonhoc'});
db.subject.hasMany(db.score, {foreignKey:'mamonhoc'});


// db.subject.belongsToMany(db.student,{through: 'bangdiem', unique:false,foreignKey:'mamonhoc'});
// db.student.belongsToMany(db.subject,{through: 'bangdiem',as:'students',foreignKey: 'masv'})

module.exports = db;
