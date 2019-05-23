import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  auth_key = '';

  constructor(
    private http: HttpClient
  ) { }

  get<T = any>(endpoint: string, params = null): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}/${endpoint}`, {
      headers: new HttpHeaders({'Authorization': this.auth_key}),
      params
    });
  }
}
