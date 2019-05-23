import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientMock } from '../../_mock-backend/http/http-client.mock';

import { ApiService } from './api.service';

describe('ApiService', () => {

  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        ApiService,
        { provide: HttpClient, useClass: HttpClientMock }
      ]
    });
  });

  beforeEach(() => {
    apiService = TestBed.get(ApiService);
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it("#orders api should return 200", () => {
    apiService.auth_key = 'TESTING_AUTH_KEY';
    apiService.get('orders').subscribe(
      response => {
        console.log(123123);
        expect(response.status).toEqual(200);
      }
    );
  });
  
  it("#orders api with invalid auth should return 401 error", () => {
    apiService.auth_key = 'INVALID_AUTH_KEY';
    apiService.get('orders').subscribe(
      response => {
        expect(response.status).toEqual(401);
      }
    );
  });
  
  it("#invalid api endpoint should return 404 error", () => {
    apiService.auth_key = 'TESTING_AUTH_KEY';
    apiService.get('invalid_endpoint').subscribe(
      response => {
        expect(response.status).toEqual(404);
      }
    );
  });
});
