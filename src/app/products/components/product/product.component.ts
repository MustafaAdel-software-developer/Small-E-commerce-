import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  display: boolean = false;
  amount: number = 0;
  @Input() loading: boolean = true;
  @Input() product: any;
  @Output() event: any = new EventEmitter<any>();

  add() {
    this.event.emit({ product: this.product, quantity: this.amount });
  }
}
