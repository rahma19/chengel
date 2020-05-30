import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  restlist:AngularFireList<any>;

  constructor(private friebase: AngularFireDatabase) { }
  getRest(){
    this.restlist=this.friebase.list('/test');
    return this.restlist;
  }
}
