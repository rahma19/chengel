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

hehe=[];
spec="specializations";
selectedCities: any[];
cities: SelectItem[];
chaine=[];
result=[];
selectedDay: string = '';
selDmn : string='';

  constructor(private router:Router,private db:AngularFireDatabase,private dataService:DataService) { 
    this.test=db.list('orders').valueChanges();
   
  }
  
  selectChangeHandler (event: any) {
    this.result = this.hehe.filter(word => word.domaine.dmn==event);  
    console.log(this.result);  
    console.log(this.hehe[0].domaine.dmn);

  }

  onClick(row){
    this.router.navigate(['/detail',row.$key]);

  }

  ngOnInit() {
    var x= this.dataService.getRest();
    x.snapshotChanges().subscribe(item=>{
    item.forEach(element=>{
    var y=element.payload.toJSON();
    y['$key']=element.key
     this.hehe.push(y);
   });
   console.log("hehe tab:"+this.hehe[0].domaine.dmn);

  })
}
}
