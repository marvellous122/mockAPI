import { TestBed, inject } from '@angular/core/testing';

import { OrdersService } from './orders.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { HttpClientMock } from '../../_mock-backend/http/http-client.mock';

describe('OrdersService', () => {

  let ordersService: OrdersService = null;
  let apiService: ApiService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        OrdersService,
        ApiService,
        { provide: HttpClient, useClass: HttpClientMock }
      ]
    });
  });

  beforeEach(() => {
    ordersService = TestBed.get(OrdersService);
    apiService = TestBed.get(ApiService);
  });

  it('should be created', inject([OrdersService], (service: OrdersService) => {
    expect(service).toBeTruthy();
  }));

  it("#orders api should return 200", () => {
    apiService.auth_key = 'TESTING_AUTH_KEY';
    ordersService.list().subscribe(
      response => {
        expect(response.data.length).toEqual(14);
      }
    )
  });
});
