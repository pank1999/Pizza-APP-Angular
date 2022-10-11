import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import {orderType} from "../models/order";
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService:OrderService,private route: ActivatedRoute) { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','action'];
  dataSource$!:Observable<any>;

  ngOnInit(): void {
    this.dataSource$=this.orderService.getAllOrders(2);

  }

}
