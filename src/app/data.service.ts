import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {FormGroup,FormControl} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user:AngularFireList<any>;
  customer:AngularFireList<any>;
  constructor(private friebase: AngularFireDatabase,private db:AngularFirestore,private rdb:AngularFireDatabase) { }
  
 getUser(){
   this.user=this.friebase.list('/orders');
  return this.user;
 }

 getCust(){
  this.customer=this.friebase.list('/customer');
  return this.customer;
 }

}
