import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  user="";
  password="";
  address="";
  role="";
  date=new Date();
  
  constructor(private db:AngularFireDatabase) { }
 
  showSuccess(form:NgForm){
   var f=form.value;
   if(f.bt=="freelancer"){
    this.db.list('freelancer').push({
      user:f.user,
     password:f.password,
     date:f.date,
     address:f.address,
     role:f.bt
         });
   }
   else{
    this.db.list('customer').push({
      user:f.user,
     password:f.password,
     date:f.date,
     address:f.address,
     role:f.bt
         });
   }
   
  }

  ngOnInit() {
    
  }

}
