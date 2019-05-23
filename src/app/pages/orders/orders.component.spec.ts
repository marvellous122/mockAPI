import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersComponent } from './orders.component';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular2-datatable';
import { HttpClientModule } from '@angular/common/http';
import { OrdersService } from '../../shared/services';
import { PaginatorComponent } from 'src/app/shared/components/paginator/paginator.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        DataTableModule
      ],
      providers: [
        OrdersService
      ],
      declarations: [ OrdersComponent, PaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
