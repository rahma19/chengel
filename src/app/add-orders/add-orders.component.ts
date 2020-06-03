import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css'],
 
})
export class AddOrdersComponent implements OnInit {
  domaines=[];
  title="";
  des="";
  date="";
  domaine="";
  price=0;
  time= new Date().toJSON();
  name="";
  mail="";

  constructor(private db:AngularFireDatabase,private dataService:DataService) { 
    this.domaines= [
      {dmn: 'Web Development'},
      {dmn: 'Design'},
      {dmn: 'Programming'},
      {dmn: 'Optimization (SEO)'},
      {dmn: 'Polygraphy'},
      {dmn: '3D Graphics'},
      {dmn: 'Ads / Marketing'},
      {dmn: 'Architecture'},
    ]
  }


 showSuccess(form:NgForm){
    console.log(form.value);
  var  f=form.value;
    this.dataService.insertOrder(f.value); 
   this.db.list('orders').push({
      title:f.title,
     des:f.des,
     date:f.date,
     domaine:f.domaine,
     price:f.price,
     mail:f.mail,
     name:f.name,
     time:f.time,
         });

  }

  ngOnInit() {
  
  /* this.db.list('orders').push({
      title:'marketing',
      price:1200,
      description:'blzvhj',
      date:'3 days',


    })*/
  }

 
 
  

}
