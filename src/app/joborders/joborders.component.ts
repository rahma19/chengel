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
nb=0;
selectedCities: any[];
cities: SelectItem[];
  constructor(private db:AngularFireDatabase,private dataService:DataService) { 
    this.test=db.list('orders').valueChanges();
    this.cities= [
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
  ];
  }



  ngOnInit() {
    var x= this.dataService.getRest();
    x.snapshotChanges().subscribe(item=>{
    item.forEach(element=>{
    var y=element.payload.toJSON();
    y['$key']=element.key
     this.hehe.push(y);
   });
  })
  console.log(this.hehe.length);
  }
}
