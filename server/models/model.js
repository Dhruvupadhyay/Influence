const mongoose=require('mongoose');

var Hotelschema=mongoose.Schema(
    [{
    
    name:{
        type:String
    },
    location:{
        type:String
    },
   
    price:{
        type:String
    },
    features:[{
        type :String
    }],
    type:{
        type:String
    }

}]);
var CompleteBooking=mongoose.Schema({
    
        name:{
            type:String
        },
        age:{
            type:String
        },
        email:{
            type:String
        },
        bookingdate:{
            type:String
        },
        hotelname:{
            type :String
        },
        hotellocation:{
            type:String
        },
        Duration:{
            type:String
        }     ,
        transactionID:{
            type:String
        }
    })


     var DraftBooking=mongoose.Schema({
        name:{
            type:String
        },
        age:{
            type:String
        },
        email:{
            type:String
        },
        date:{
            type:String
        },
        hotelname:{
            type :String
        },

        hotellocation:{
            type:String
        }
    
    

    }
     )



// var sample={
//     CompleteBooking:[{
//       'name':'Ericson',
//       'age':'42',
//       'bookingdate':'14 feb 2020',
//       'hotelname':'erico',
//       'hotellocation':'Bangalore',
//       'duration':'10000',
//       'transactionID':'125353737'
//     },
    
// ],
//      DraftBooking:[{
//         'name':'Ericson',
//         'age':'42',
//         'date':'14 feb 2020',
//         'hotelName':'erico',
//         'hotelLocation':'Bangalore',        
//      }]
// }

 var hoteldata={
    hotel:[{
      'name':'Ericson',
      'location':'Bangalore',
      'price':'10000',
      'features':['A','B','C','D','E','F'],
      'type':'Resort'
      
    },
    {
        'name':'HOTEL A',
        'location':'Bangalore',
        'price':'9000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL B',
        'location':'Bangalore',
        'price':'8000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL C',
        'location':'Bangalore',
        'price':'15000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL D',
        'location':'Bangalore',
        'price':'14000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
    {
        'name':'HOTEL E',
        'location':'Delhi',
        'price':'19000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },{
        'name':'HOTEL F',
        'location':'Delhi',
        'price':'20000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },{
        'name':'HOTEL G',
        'location':'Delhi',
        'price':'10090',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },{
        'name':'HOTEL I',
        'location':'Delhi',
        'price':'12000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },{
        'name':'HOTEL J',
        'location':'Delhi',
        'price':'3000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL K',
        'location':'GOA',
        'price':'100000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL L',
        'location':'GOA',
        'price':'10043',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL M',
        'location':'GOA',
        'price':'15530',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL N',
        'location':'GOA',
        'price':'10393',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL O',
        'location':'GOA',
        'price':'10230',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL P',
        'location':'MUMBAI',
        'price':'10000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL Q',
        'location':'MUMBAI',
        'price':'10330',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL R',
        'location':'MUMBAI',
        'price':'30000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL S',
        'location':'MUMBAI',
        'price':'50000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL T',
        'location':'MUMBAI',
        'price':'30000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },

      {
        'name':'HOTEL U',
        'location':'CHENNAI',
        'price':'32000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL V',
        'location':'CHENNAI',
        'price':'2000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL W',
        'location':'CHENNAI',
        'price':'45000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL X',
        'location':'CHENNAI',
        'price':'12000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
      {
        'name':'HOTEL Y',
        'location':'CHENNAI',
        'price':'42000',
        'features':['A','B','C','D','E','F'],
        'type':'Resort'
        
      },
    ]
  }

const hotel=mongoose.model('Hotel',Hotelschema);
(hotel.collection.count((err,count)=>{

    if(count==0){
        hotel.insertMany(hoteldata.hotel,(err,doc)=>{
            if(!err){
                
                console.log("data successfuly inserted")
            }else{
                console.log(err)
            }
        })
    }else{
        console.log(" number of records" + count)
    }
}));

mongoose.model('CompleteBooking',CompleteBooking);
mongoose.model('DraftBooking',DraftBooking);
// Completebooking.insertMany(sample,(err,doc)=>{
//     if(!err){
//         console.log('succesfully inserted')
//     }else{
//         console.log(err)
//     }
// })

