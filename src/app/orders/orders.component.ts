import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { get_User, RootReducerState, UserOrder } from '../store/reducers';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService:OrderService,private route: ActivatedRoute,private store:Store<RootReducerState>) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource$!:any;
  userId!:number;
  ngOnInit(): void {
     this.store.select(get_User).subscribe(res=>{
        this.userId=res.id;
     })
    
    this.orderService.getAllOrders(this.userId);
    this.store.select(UserOrder).subscribe(res=>{
        this.dataSource$=res;
    });

  }

  deleteOrder(id:number){
    this.orderService.removeOrder(this.userId,id);
  }

}
