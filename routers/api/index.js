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

  router.get('/cache-node', async function(req, res, next) {
    await NODE.findAll({}).then((data) => {
      var nodes = new Array();  
      data.forEach((element)=>{
          var node = {
            coordinates: [element['xPos']/100, element['yPos']/100],
            attributes: {
              id: element['id'],
              type: element['type']
            }
          }
          nodes.push(node);
        })
      
      res.send(nodes);
    })

   
  });


module.exports = router;

