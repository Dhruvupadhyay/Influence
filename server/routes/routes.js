const express=require('express');
const router=express.Router();
const registeruser=require('../controller/controller')

router.post('/register',registeruser.register);
router.get('/check',registeruser.check);
router.get('/data',registeruser.getdata);
module.exports=router;