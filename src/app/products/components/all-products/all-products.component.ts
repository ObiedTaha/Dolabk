import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { SelectComponent } from 'src/app/shared/components/select/select.component';
import { ProductsCardComponent } from 'src/app/shared/components/products-card/products-card.component';

import { RouterLink } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/iproduct';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule, RouterLink,SpinnerComponent, SelectComponent, ProductsCardComponent],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) { }

  products: IProduct[] = [];
  categories: string[] = [];
  loader: boolean = false;
  cartProducts: any[] = [];

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loader = true;
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
        this.loader = false;
      },
      error: (err) => {
        this.loader = false;
        alert(err.message);

      }
    })
  }

  getCategories() {
    this.loader = true;
    this._ProductsService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (err) => {
        this.loader = false;
        alert(err);
      }
    })
  }

  filterCategory(event: any) {
    let value = event.target.value;
    ('all' == value) ? this.getProducts() : this.getProductsCategory(value);
  }

  getProductsCategory(keyword: string) {
    this.loader = true;
    this._ProductsService.getSpecificCategory(keyword).subscribe({
      next: (response) => {
        console.log(response);
        this.products = response;
        this.loader = false;
      },
      error: (err) => {
        console.log(err);
        this.loader = false;
      }
    })
  }

  getProductsOfCategory(event: any) {
    let value = event.target.innerHTML;
    this.getProductsCategory(value);
  }

  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if (!exist) {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      } else {
        alert('Prouduct already add');
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    }
  }

}
