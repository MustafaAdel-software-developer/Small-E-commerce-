import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  category: string = '';
  products: any[] = [];
  categories: any[] = [];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe(
      (item: any) => {
        this.products = item;
      },
      (err) => console.log(err)
    );
  }
  getAllCategories() {
    this.productService.getAllCategories().subscribe(
      (item: any) => {
        this.categories = item;
      },
      (err) => console.log(err)
    );
  }
  filterCategories(event: any) {
    this.category = event.target.value;
    this.getProductsByCategory(this.category);
  }
  getProductsByCategory(event: any) {
    this.productService.getProductsByCategory(event).subscribe((item: any) => {
      this.products = item;
    });
  }
}
