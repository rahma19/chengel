import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {FormGroup,FormControl} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  restlist:AngularFireList<any>;
  user:AngularFireList<any>;
  customer:AngularFireList<any>;
  constructor(private friebase: AngularFireDatabase,private db:AngularFirestore,private rdb:AngularFireDatabase) { }
  orderslist:AngularFireList<any>;
  
  getRest(){
    this.restlist=this.friebase.list('/orders');
    return this.restlist;
  }
 getUser(){
   this.user=this.friebase.list('/orders');
  return this.user;

 }

 getCust(){
  this.customer=this.friebase.list('/customer');
  return this.customer;
 }
  
  insertOrder(f:Order){
    this.friebase.list('/orders').push({
     title:f.title,
     des:f.des,
     date:f.date,
     domaine:f.domaine,
     price:f.price,
     mail:f.mail,
     name:f.name
    });
  }
}
