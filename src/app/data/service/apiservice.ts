import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { sp } from "@angular/core/src/render3";
import { stringify } from "querystring";
import { Subject } from "rxjs";
@Injectable()
export class ApiService{
countD=new Subject<any>();
countC=new Subject<any>();
visits=new Subject<number>();
    draftbooking={};
    constructor(private http:HttpClient){

    }

    draftbook(value){
        this.countD.next(value);
    }
    completebook(value){
        this.countC.next(value);
        console.log('returned value -: ' +value)
    }

postdata(formvalue){
    formvalue.hotelname='taj';
    formvalue.hotellocation='bangalore';
    formvalue.transactionID='1234567';

   return this.http.post('http://localhost:3000/api/register',formvalue)
}
draftpost(draftid:any)
{
    if(draftid!=null){
        return   this.http.post('http://localhost:3000/api/register',this.draftbooking,{params:{draftid:draftid}})
    }else{
        return   this.http.post('http://localhost:3000/api/register',this.draftbooking,{params:{draft:'yes'}})
    }

}
getdata(type,city?){

    if(type=='city'){
        console.log('city type' + city)
        return this.http.get('http://localhost:3000/api/data', {params:{city:city}})    
    }
if(type==='hotel'){
    return this.http.get('http://localhost:3000/api/data', {params:{type:'hotel'}})

}
if(type==='complete'){
    return this.http.get('http://localhost:3000/api/data', {params:{type:'complete'}})
}else if(type==='draft'){
    return this.http.get('http://localhost:3000/api/data',{params:{type:'draft'}})
}
    
}

}