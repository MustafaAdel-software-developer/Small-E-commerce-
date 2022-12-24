import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpClient: HttpClient) {}

  createNewCart(model: any) {
    return this.httpClient.post(`${environment.baseApi}carts`, model);
  }
}
