import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'orders' },
  { path: '**', redirectTo: 'orders'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
