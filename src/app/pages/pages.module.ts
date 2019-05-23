import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  declarations: [OrdersComponent]
})
export class PagesModule { }
