import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent {

  // @Input() data:any={};
  @Input() data!: IProduct;
  @Output() item = new EventEmitter();
  addButton: boolean = false;
  amount: number = 1;
  constructor() { }

  ngOnInit(): void { }

  // send item clicked and amout to parent
  add() {
    this.item.emit({ data: this.data, quantity: this.amount });
  }

  added() {
    localStorage.setItem('added', 'true');
  }

}
