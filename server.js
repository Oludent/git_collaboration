const express = require('express')
const router = require('./router/userRouter.js');

const app = express();

app.use(express.json())

app.use(router)

app.listen(6000, () =>{
    console.log('server is running on  PORT:6000')
});