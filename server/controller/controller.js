const mongoose=require('mongoose');
const User=mongoose.model('Hotel');
const CBooking=mongoose.model('CompleteBooking')
const DBooking=mongoose.model('DraftBooking')
module.exports.register=function(req,res,next){
    if(req.query.draft==='yes'){
        console.log('running')
        dbooking=new DBooking();
        dbooking.name=req.body.name;
        dbooking.age=req.body.age;
        dbooking.email=req.body.email;
        dbooking.hotelname='majenta';
        dbooking.hotellocation='pune';
dbooking.save((err,doc)=>{
    if(!err){
        res.send(JSON.stringify(doc._id))
    }
})
    }else if(req.query.draftid!=null){
        console.log('correct running')
        console.log(req.query.draftid)
        did=JSON.stringify( req.query.draftid)
dbooking.remove({_id:did})
    }
    else{
        cbooking=new CBooking()
        cbooking.name=req.body.name;
        cbooking.age=req.body.age;
        cbooking.bookingdate=req.body.bookingdate;
        cbooking.hotelname=req.body.hotelname;
        cbooking.hotellocation=req.body.location;
        cbooking.transactionID=req.body.transactionID;
        cbooking.email=req.body.email;
        cbooking.save();
    
    }
 
 }

 module.exports.getdata=function(req,response,next){
if(req.query.type==='hotel'){
    console.log('hotel running')
User.find({},((err,doc)=>{
response.send(doc);

}))

}

if(req.query.city!=null){
    User.find({location:req.query.city},(err,doc)=>{
        response.send(doc)
    })
}
    if(req.query.type==='complete'){
    CBooking.find({},(err,doc)=>{
        if(!err){
            var completebookings=JSON.stringify(doc.length) 
            response.send(completebookings)
        }
    })
} if(req.query.type==='draft'){
    DBooking.find({},(err,doc)=>{
        if(!err){
            var Draftbookings=JSON.stringify(doc.length) 
            response.send(Draftbookings)
        }
    })
}
   

     }
    
 //  Booking.find({CompleteBooking:{}},(err,doc)=>{
// if(!err){
//     console.log(doc)
// }
//  }
 
    
//      booking.save((err,doc)=>{
//         if(err){

//             console.log(err)
//         }else{
//            console.log(doc)
//         }
//     })
 

module.exports.check=(req,res,next)=>{
   
}