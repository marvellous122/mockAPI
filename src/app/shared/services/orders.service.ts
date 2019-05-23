import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private apiService: ApiService
  ) { }

  list(params = null) {
    return this.apiService.get('orders', params);
  }
}
