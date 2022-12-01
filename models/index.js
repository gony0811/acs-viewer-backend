'use strict';

const Sequelize = require('sequelize');
const USER = require('./ui/na_u_users');
const ALARM = require('./alarm/na_a_alarm');
const ALARMSPEC = require('./alarm/na_a_alarmspec');
const NODE = require('./resource/na_r_node');
const LINK = require('./resource/na_r_link');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.USER = USER;
db.ALARM = ALARM;
db.ALARMSPEC = ALARMSPEC;

db.NODE = NODE;
db.LINK = LINK;

USER.init(sequelize);
ALARM.init(sequelize);
ALARMSPEC.init(sequelize);
NODE.init(sequelize);
LINK.init(sequelize);
module.exports = db;