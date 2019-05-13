const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/key')
require('./models/User'); // 실행
require('./services/passport'); //PASSPORT 실행전에 MODEL이 있어야함


mongoose.connect(keys.mongoURI,{ useNewUrlParser: true });

const app = express();
//이거는 함수      ( 매개변수)
require('./routes/authRoutes')(app);

//HEROKU 쓰면 || 안쓰면
const PORT = process.env.PORT || 5000;
app.listen(PORT);
