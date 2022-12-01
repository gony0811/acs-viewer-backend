const express = require('express');
const router = express.Router();
const {sequelize, USER, ALARM, ALARMSPEC, NODE, LINK} = require('../../models');

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

  router.get('/cache-link', async function(req, res){
    let queryResult = await LINK.findAll();
    let nodes = await NODE.findAll();

    var nodeMap = new Map();
    for(let element of nodes){
      nodeMap.set(element.id, element);
    }

    let result = Array();
    let posret = Array();

    queryResult.forEach(element=> {
      posret.push({
        properties:{
          color:'#154627',
        },
        geometry: {
          coordinates: [
            [nodeMap.get(element['fromNodeId']).xPos/100, nodeMap.get(element['fromNodeId']).yPos/100],
            [nodeMap.get(element['toNodeId']).xPos/100, nodeMap.get(element['toNodeId']).yPos/100]
          ]}
      })
    })
    result.push({
      features: posret
    })

    console.log(result);
  
    res.status(200).json(result);
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

