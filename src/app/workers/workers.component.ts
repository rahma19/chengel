import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Data } from '@angular/router';
import {AngularFireList} from '@angular/fire/database';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {Router,Params} from '@angular/router';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  users:Observable<any[]>;
  specs:["freelancer","customer"];
  
  constructor(public dataservice:DataService,db:AngularFireDatabase,private router:Router) {
     this.users=db.list('freelancer').valueChanges();
    }
  

 
  ngOnInit() {

    

  }

}
