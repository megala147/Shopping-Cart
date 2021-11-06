import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpclient: HttpClient) {}

  getDataList() {
    return this.httpclient.get<any>('https://fakestoreapi.com/products');
  }
}
