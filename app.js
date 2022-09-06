const express = require('express');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const indexRouter = require('./routers');
const cors = require('cors');
const {sequelize, USER, ALARM, ALARMSPEC} = require('./models');

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

app.use(cors());
app.set('port', process.env.PORT || 3000);
app.use('/',indexRouter);

app.get('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '빈 포트에서 대기중임');
});