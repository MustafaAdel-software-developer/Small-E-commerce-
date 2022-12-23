import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    return this.httpClient.get(`${environment.baseApi}products`);
  }

  getAllCategories() {
    return this.httpClient.get(`${environment.baseApi}products/categories`);
  }
  getProductsByCategory(event: string) {
    return this.httpClient.get(
      `${environment.baseApi}products/category/${event}`
    );
  }
}
