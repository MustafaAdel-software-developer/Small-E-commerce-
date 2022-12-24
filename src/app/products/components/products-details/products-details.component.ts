import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss'],
})
export class ProductsDetailsComponent implements OnInit {
  loading: boolean = false;
  id: number;
  item: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    this.loading = true;
    return this.productService.getProductById(this.id).subscribe(
      (item: any) => {
        this.loading = false;
        this.item = item;
        console.log(item);
      },
      (err: any) => {
        this.loading = false;
        console.log(err);
      }
    );
  }
}
