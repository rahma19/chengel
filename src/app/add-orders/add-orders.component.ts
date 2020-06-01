import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-orders',
  templateUrl: './add-orders.component.html',
  styleUrls: ['./add-orders.component.css']
})
export class AddOrdersComponent implements OnInit {
  domaines=[];
  title="";
  des="";
  date="";
  domaine="";
  price=0;
  name="";
  mail="";

  constructor(private db:AngularFireDatabase) { 
    this.domaines= [
      {dmn: 'New York'},
      {dmn: 'Rome'},
      {dmn: 'London'},
      {dmn: 'Istanbul'},
      {dmn: 'Paris'}]
  }
  showSuccess(f:NgForm){
    console.log("azza");

  }

  ngOnInit() {
   /* this.db.list('orders').push({
      title:'marketing',
      price:1200,
      description:'blzvhj',
      date:'3 days'
    })*/
  }
 
  

}
