const express = require('express');
const router = express.Router();
const {sequelize, USER, ALARM, ALARMSPEC, NODE} = require('../../models');

router.get('/current-alarm', async function(req, res, next) {
    await ALARM.findAll({}).then((data) => {
        res.send(data);
    })
  });

  router.get('/alarm-spec', async function(req, res, next) {
    await ALARMSPEC.findAll({}).then((data) => {
        res.send(data);
    })
  });

  router.get('/node', async function(req, res, next) {
    await NODE.findAll({}).then((data) => {
        res.send(data);
    })
  });


module.exports = router;

