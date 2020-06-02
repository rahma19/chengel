import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:any;
  y:Order;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private dataService:DataService) { }
 jobOrders(){
    this.router.navigate(['/jobOrders']);

  }
  SignContract(){
    this.router.navigate(['/signContract']);

  }
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['key'];
    var x= this.dataService.getUser();
x.snapshotChanges().subscribe(item=>{
  //this.y=[];
  item.forEach(element=>{
   var y=element.payload.toJSON();
   if (element.key==this.id)
    { y['$key']=element.key
      this.y=y;
    }
  } );
  console.log(this.y.name);
});
  }

}
