import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  restlist:AngularFireList<any>;
  orderslist:AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }
  getRest(){
    this.restlist=this.firebase.list('/orders');
    return this.restlist;
  }
  insertOrder(f:Order){
    this.firebase.list('/orders').push({
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
