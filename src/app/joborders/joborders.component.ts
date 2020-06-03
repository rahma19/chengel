import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import {SelectItem} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joborders',
  templateUrl: './joborders.component.html',
  styleUrls: ['./joborders.component.css']
})
export class JobordersComponent implements OnInit {
test:Observable<any[]>;

orders=[];
selDmn : string='';
prc=0;
  constructor(private router:Router,private db:AngularFireDatabase,private dataService:DataService) { 
   
  }

  onClick(row){
    this.router.navigate(['/detail',row.$key]);
  }

  ngOnInit() {
    var x= this.dataService.getUser();
    x.snapshotChanges().subscribe(item=>{
    item.forEach(element=>{
    var y=element.payload.toJSON();
    y['$key']=element.key
     this.orders.push(y);
   });

  })
}
}
