import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  loading: boolean = false;
  category: string = '';
  products: Product[] = [];
  categories: any[] = [];
  addToLocalStorage: Product[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.loading = true;
    this.productService.getAllProducts().subscribe(
      (item: any) => {
        this.loading = false;
        this.products = item;
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }
  getAllCategories() {
    this.loading = true;
    this.productService.getAllCategories().subscribe(
      (item: any) => {
        this.loading = false;
        this.categories = item;
      },
      (err) => {
        this.loading = false;
        console.log(err);
      }
    );
  }
  recievedCategory(event: any) {
    this.category = event.target.value;
    this.category == 'All'
      ? this.getAllProducts()
      : this.getProductsByCategory(this.category);
  }

  getProductsByCategory(event: any) {
    this.loading = true;
    this.productService.getProductsByCategory(event).subscribe((item: any) => {
      this.loading = false;
      this.products = item;
    });
  }

  addToCart(event: any) {
    if ('products' in localStorage) {
      this.addToLocalStorage = JSON.parse(
        localStorage.getItem('products') || '[]'
      );
      let exist = this.addToLocalStorage.find(
        (item: any) => item.product.id == event.product.id
      );
      if (exist) {
        alert('is Existed');
      } else {
        this.addToLocalStorage.push(event);
        localStorage.setItem(
          'products',
          JSON.stringify(this.addToLocalStorage)
        );
      }
    } else {
      this.addToLocalStorage.push(event);
      localStorage.setItem('products', JSON.stringify(this.addToLocalStorage));
    }
  }
}
