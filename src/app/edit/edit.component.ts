import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Observable} from 'rxjs';
import{DataService} from '../data.service';
import{ Router} from '@angular/router'; 
import {AngularFirestore} from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  users:Observable<any[]>;
  price:any;
  constructor(db:DataService,private route:ActivatedRoute,private fr:AngularFireDatabase) { 

  }

  ngOnInit() {
    this.price=this.route.snapshot.params['price'];
    this.users=this.fr.list('orders').valueChanges();

  }


}
