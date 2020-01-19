import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ApiService } from './service/apiservice';

@Component({
  selector: 'data-component',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit  {
   recipeForm: FormGroup;
   paymentpage=false;
   draftbooking={id:String,name:String,age:String,bookingdate:String,email:String,location:String}
   countdraftbooking=0;1
   countcompletebooking=0;
   visitors=0;
   bookingpage=false;
   allfilled=false;
   hoteldata=[{_id:String,name:String,location:String,price:String,type:String,feature:[]}]
   sortedhoteldata=[{_id:String,name:String,location:String,price:String,type:String,feature:[]}]
   recommendedhotel=[{_id:String,name:String,location:String,price:String,type:String,feature:[]}]

constructor(private service:ApiService){

   this.init()
}
ngOnInit(){
     var v =localStorage.getItem('visits')
  this.visitors=parseInt(v);
  this.visitors++;
  console.log(this.visitors)

   var string=this.visitors.toString();
   
   console.log("new valuen"+string)
   localStorage.setItem('visits',string)
   this.service.countD.subscribe(data=>{
      this.countdraftbooking=data;
   })
this.service.countC.subscribe(data=>{
   this.countcompletebooking=data;
}

   )
this.service.getdata('hotel').subscribe(res=>{
this.hoteldata=res;

this.hoteldata.forEach((el,index,array)=>{
   if(index<array.length-1 && el.location==this.hoteldata[index+1].location){
console.log('yes')
   }else{

      console.log('no')
      this.sortedhoteldata.push(el)

   }
})
this.sortedhoteldata.splice(0,1)
console.log('sorted'+ this.sortedhoteldata)
console.log(this.hoteldata)
})
   
   this.service.getdata('draft').subscribe(res=>{
      this.service.draftbook(res);
   })
   this.service.getdata('complete').subscribe(res=>{
      this.service.completebook(res);
   })

}
recommendedhotels(city){
   this.service.getdata('city',city).subscribe(res=>{
      this.recommendedhotel=res;
   })
console.log(city)
}

book(city){
   this.recommendedhotels(city);
   this.bookingpage=true;
}
test1(id){

if(id==='name'){
this.draftbooking.name=document.getElementById(id).value;
}
if(id==='age'){
   this.draftbooking.age= document.getElementById(id).value
}
if(id==='bookingdate'){
   this.draftbooking.bookingdate=document.getElementById(id).value
}
if(id==='email'){
   this.draftbooking.email=document.getElementById(id).value;
   }
   if(id==='location'){
      this.draftbooking.location=document.getElementById(id).value;
      }
if(document.getElementById('name').value&&document.getElementById('age').value&&document.getElementById('bookingdate').value
&&document.getElementById('email').value&&document.getElementById('location').value !=null){
   this.allfilled=true;
}
      
 console.log(this.draftbooking)
}
init(){
   let CustomerName = '';
    let age = '';
    let bookingdate = '';
    let location='';
    let email='';
    
   this.recipeForm = new FormGroup({
      name: new FormControl(CustomerName, Validators.required),
      age: new FormControl(age, Validators.required),
      bookingdate: new FormControl(bookingdate, Validators.required),
      email:new FormControl(email,Validators.required),
      location:new FormControl(location,Validators.required),
      
    });
   
   
}
paycancel(){
window.location.reload()}
payment(){

   this.service.draftpost(this.draftbooking.id).subscribe(res=>{

   })


   this.service.postdata(this.recipeForm.value).subscribe((res)=>{
  
 })

window.location.reload();

}
back(){
   this.bookingpage=false;
}
onSubmit(){
   if(!this.paymentpage){
this.paymentpage=true;
   }
  this.service.draftbooking=this.draftbooking;
   this.service.draftpost(null).subscribe(res=>{

setTimeout(() => {
   this.draftbooking.id=res;
   
},2000);      
   })
   console.log('hey')
   
}

 
// highcharts = Highcharts;
//   chartOptions = {   
//      chart: {
//         type: "column"
//      },
//      title: {
//         text: "Class-Wise Questions"
//      },
//      subtitle: {
//         text: "Resize the frame or cick buttons to change appearance"
//      },
//      xAxis:{
//         categories:["VII", "VIII", "IX", "V","VI", "X", "XI",
//            "XII"]
//      },
//      yAxis: {   
//        max:1500,
//        tickInterval:500,       
//         title:{
//            text:"Amount"
//         } ,
//         labels: {
//           format: '{value:0f} '
//       }
//      },
//      tooltip: {
//         valueSuffix:""
//      },
//      series: [
//         {
//            name: 'Math',
           
//            data: [800, 850, 500, 600, 850, 900, 700,400]
//         },
//         {
//            name: 'English',
//            data: [500, 450, 600, 500, 450, 650,500]
//         },
//         {
//            name: 'Logic',
//            data: [1000, 800, 900, 850, 1200, 1500, 950, 1000]
//         }
        
//      ]
//   };
//   chartOptions1 = {   
//     chart: {
//        type: "pie",
//        plotBackgroundColor: null,
       
      
// },
  
  
   
//     tooltip: {
        
//        valueSuffix:""
//     },
//     title : {
//       text: 'Subject-Wise<br>Questions',
//       align: 'center',
//       verticalAlign: 'middle',
//       y: 100  
//    },
//     plotOptions: {
//       pie: {
//         size:'150%',
        
//          dataLabels: {
//             enabled: true,
//             distance: -40,
            
//             style: {
          
//                fontWeight: 'bold',
//                color: 'white',
//                textShadow: '0px 1px 2px black'
//             }
//          },
//          startAngle: -90,
//          endAngle: 90,
//          center: ['50%', '100%']
//       }
//    },
//     series :[{
//       type: 'pie',
//       name: 'Subject Wise Questions',
//       innerSize: '50%',
//       data: [
//          ['Logic',   35],
//          ['Words',       25],
//          ['Math', 40],
        
//          {
//             name: 'Others',
//             y: 0.7,
//             dataLabels: {
//                enabled: false
//             }
//          }
//       ]
//    }]    
//  };
//  chartOptions3 = {   
//   chart: {
//      type: "spline"
//   },
//   title: {
//      text: "Monthly Update Questions"
//   },
//   subtitle: {
//      text: "january-December"
//   },
//   xAxis:{
//      categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
//         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
//   },
//   yAxis: {         
  
//       max:3,
//       tickInterval:1,
  
//      title:{
//         text:"Marks"
//      } 
//   },
//   tooltip: {
//      valueSuffix:""
//   },
//   series: [
//      {
//         name: 'Math',
//         data: [1.8, 2.1,1.6, 2.2, 1.2, 1.7, 1.2,2.7, 2.5, 1.8, 2, 1.4]
//      },
//      {
//         name: 'English',
//         data: [1.2, 1,0.3, 2, 0.2, 2, 2.6,2.4, 0.5, 2, 1.4, 2]
//      },
//      {
//         name: 'Logic',
//         data: [2.8, 0.4,1, 1.5, 1, 1.4, 1.9,1.1, 1.2, 1.2, 0.1, 1.2]
//      },
     
//   ]
// };


}
