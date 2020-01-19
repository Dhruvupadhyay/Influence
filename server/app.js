require('./config/config');
require('./models/db');
const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');

const app=express();
const router=require('./routes/routes');

app.use(bodyparser.json());

app.use(cors());
app.use('/api',router);
app.listen('3000',()=>{
    console.log('server started at port 3000');
})