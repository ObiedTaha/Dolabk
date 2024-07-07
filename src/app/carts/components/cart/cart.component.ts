import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  totalPrice: number = 0;
  success: boolean = false;
  constructor(private _CartsService: CartsService) { }

  ngOnInit(): void {
    this.getCardProduct();
  }

  getCardProduct(): void {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }
    this.getCartTotalPrice();
  }

  minsAmount(index: number) {
    if (this.cartProducts[index].quantity > 1) {
      this.cartProducts[index].quantity--
      this.getCartTotalPrice();
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    }
    else {

    }
  }

  addAmount(index: number) {
    this.cartProducts[index].quantity++
    this.getCartTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  }

  detectChange() {
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));

  }

  deleteProduct(index: number) {
    this.cartProducts.splice(index, 1);
    this.getCartTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  clearAllProducts() {
    this.cartProducts = [];
    this.getCartTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  getCartTotalPrice(): void {
    this.totalPrice = 0;
    for (let x in this.cartProducts)
      this.totalPrice += this.cartProducts[x].item.price * this.cartProducts[x].quantity;

  }

  addCart() {
    let products = this.cartProducts.map(item => { return { productId: item.item.id, quantity: item.quantity } })
    let model = {
      userId: 5,
      date: new Date(),
      products: products
    }


    this._CartsService.creatNewCart(model).subscribe({
      next: () => {
        if(this.cartProducts.length>0){
          this.cartProducts=[];
          localStorage.setItem('cart',JSON.stringify(this.cartProducts));
          this.getCartTotalPrice();
          this.success = true;
        }


      }
    })

  }

}
