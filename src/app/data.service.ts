import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {FormGroup,FormControl} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  restlist:AngularFireList<any>;
  user:AngularFireList<any>;
  constructor(private friebase: AngularFireDatabase,private db:AngularFirestore,private rdb:AngularFireDatabase) { }
  getRest(){
    this.restlist=this.friebase.list('/test');
    return this.restlist;
  }
 getUser(){
   this.user=this.friebase.list('/orders');
  return this.user;

 }
  
}
