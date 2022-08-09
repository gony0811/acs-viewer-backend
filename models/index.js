'use strict';

const Sequelize = require('sequelize');
const USER = require('./ui/na_u_users');
const ALARM = require('./alarm/na_a_alarm');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.USER = USER;
db.ALARM = ALARM;

USER.init(sequelize);
ALARM.init(sequelize);

module.exports = db;