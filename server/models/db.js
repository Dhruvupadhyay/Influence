var db=require('mongoose');
db.connect('mongodb://localhost:27017/MEANSTACKDB',(err=>{
    if(!err){
        console.log('database successfuly connected')
    }else{
        console.log(JSON.stringify(err))
    }
}))

require('./model')