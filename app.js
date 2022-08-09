const express = require('express');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const {sequelize, USER, ALARM} = require('./models');

dotenv.config();

nunjucks.configure('views', {
    express: app,
    watch: true,
});

sequelize.sync({fore: false}).then(()=>{
    console.log('데이터베이스 연결 성공');
})
.catch((err) => {
    console.error(err);
});


app.set('port', process.env.PORT || 3000);

app.get('/', async (req, res) => {
    await ALARM.findAll({}).then((data) => {
        res.send(data);
    })
})
.listen(app.get('port'), () => {
    console.log(app.get('port'), '빈 포트에서 대기중임');
});