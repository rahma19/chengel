import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


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
  time= new Date();
  name="";
  mail="";

  constructor(private router:Router,private db:AngularFireDatabase,private dataService:DataService,private datepipe:DatePipe) { 
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
  var  f=form.value;
  f.date=this.datepipe.transform(f.date, 'yyyy-MM-dd');
  f.time=this.datepipe.transform(f.time, 'yyyy-MM-dd');
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
         this.router.navigate(['/jobOrders']);
  }

<<<<<<< HEAD
  ngOnInit() {
   this.db.list('orders').push({
      title:'marketing',
      price:1200,
      description:'blzvhj',
      date:'3 days',


    })

  }
=======
  ngOnInit() { }
>>>>>>> 540adcd0c99605143cd3323f48db4672bd10f0d2

 
 
  

}
