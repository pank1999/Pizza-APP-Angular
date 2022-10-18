import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import {orderType} from "../models/order";
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { get_User, RootReducerState } from '../store/reducers';


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
    this.dataSource$=this.orderService.getAllOrders(this.userId);

  }

}
