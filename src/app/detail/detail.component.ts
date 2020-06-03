import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { DataService } from '../data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:any;
  y:Order;
  date: Date;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private dataService:DataService,public datepipe: DatePipe) { }
 jobOrders(){
    this.router.navigate(['/jobOrders']);
  }

  clk(){
    var x=this.datepipe.transform(this.date, 'yyyy-MM-dd');
    console.log(x);

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
