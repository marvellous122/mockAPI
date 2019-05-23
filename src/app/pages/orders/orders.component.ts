import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/shared/services';
import { Orders } from '../../_mock-backend/_db';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  
  params: any = {};
  totalOrders: number;
  totalPages: number;
  countPerPage = 10;
  subscription;
  orders = [];

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.onParamChange();
  }

  async onParamChange() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.ordersService.list(this.params).subscribe(
      response => {
        this.orders = response.orders;
        this.params.page = response.page;
        this.totalPages = response.pages;
        this.totalOrders = response.total;
      }
    );
  }

}
