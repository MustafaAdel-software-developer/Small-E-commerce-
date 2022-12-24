import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: any[] = [];
  total: number = 0;

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    if ('products' in localStorage) {
      this.products = JSON.parse(localStorage.getItem('products') || '[]');
    }
    this.getTotal();
  }

  getTotal() {
    for (let item in this.products) {
      this.total +=
        this.products[item].product.price * this.products[item].quantity;
    }
  }
  incQuantity(id: number) {
    this.products[id].quantity++;
    this.getTotal();
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  descQuantity(id: number) {
    this.products[id].quantity--;
    this.getTotal();
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  detectChange() {
    this.getTotal();
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  delete(id: number) {
    this.products.splice(id, 1);
    this.getTotal();
    localStorage.setItem('products', JSON.stringify(this.products));
  }
  clear() {
    this.products = [];
    this.getTotal();
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  addCart() {
    const arrOfId = this.products.map((item: any) => {
      return { productId: item.product.id, quantity: item.quantity };
    });
    let model = {
      userId: 1,
      date: new Date(),
      products: [arrOfId],
    };
    console.log(model);
  }
}
