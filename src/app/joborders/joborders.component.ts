import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-joborders',
  templateUrl: './joborders.component.html',
  styleUrls: ['./joborders.component.css']
})
export class JobordersComponent implements OnInit {
test:Observable<any[]>;
hehe=[];
selectedCities: any[];
cities: SelectItem[];
  constructor(private db:AngularFireDatabase,private dataService:DataService) { 
    /*this.test=db.list('test').valueChanges();
    this.cities= [
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];*/
  }




  ngOnInit() {
    /*this.db.list('test').push({
      nom:'reuhmeuuu'
    });
<<<<<<< HEAD
    
   this.db.list('orders').push({
    title:'dev',
    price:1200,
    description:'blabla',
    date:'3days'
  });*/
=======
    */
  /* this.db.list('orders').push({
    title:'dev',
    price:1200,
    description:'blabla',
    date:'3days'*/
  

>>>>>>> a3ccfd1a077aaf571b4be865f448e6468c9780de

    





    var x= this.dataService.getRest();
x.snapshotChanges().subscribe(item=>{
  console.log(item);
  item.forEach(element=>{
    var y=element.payload.toJSON();
    y['$key']=element.key
     this.hehe.push(y);
   });
  })
  console.log(this.hehe);
  }
}
