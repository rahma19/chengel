import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-joborders',
  templateUrl: './joborders.component.html',
  styleUrls: ['./joborders.component.css']
})
export class JobordersComponent implements OnInit {
test:Observable<any[]>;
hehe=[];
  constructor(private db:AngularFireDatabase,private dataService:DataService) { 
    this.test=db.list('test').valueChanges();
  }

  ngOnInit() {
    /*this.db.list('test').push({
      nom:'reuhmeuuu'
    });
    */
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
