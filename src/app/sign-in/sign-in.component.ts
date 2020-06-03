import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatePipe } from '@angular/common';
import { Message } from 'primeng/api/message';


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
  msgs: Message[] = [];

  date=new Date();
  
  constructor(private db:AngularFireDatabase,public datepipe: DatePipe) { }
 
  showSuccess(form:NgForm){
   var f=form.value;
   f.date =this.datepipe.transform(f.date, 'yyyy-MM-dd');

   if(f.bt=="freelancer"){
    this.db.list('freelancer').push({
      user:f.user,
     password:f.password,
     date:f.date,
     address:f.address,
         });
         this.msgs = [{severity:'info', summary:'confirmed', detail:'Freelancer Submited'}]; 
   }
   else{
    this.db.list('customer').push({
      user:f.user,
     password:f.password,
     date:f.date,
     address:f.address,
         });
         this.msgs = [{severity:'info', summary:'confirmed', detail:'Customer Submited'}];

   }
   
  }

  ngOnInit() {
    
  }

}
