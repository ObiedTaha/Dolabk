import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/interfaces/product';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  constructor(private _ProductsService: ProductsService) { }

  products: Product[] = [];
  categories: any[] = [];

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response
      },
      error: (err) => {
        alert(err.message)
      }
    })
  }

  getCategories() {
    this._ProductsService.getAllCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (err) => {
        alert(err);
      }
    })
  }

  filterCategory(event: any) {
    let value = event.target.value;
    ('all' == value) ? this.getProducts() : this.getProductsCategory(value);
  }

  getProductsCategory(keyword: string) {
    this._ProductsService.getSpecificCategory(keyword).subscribe({
      next: (response) => {
        console.log(response);
        this.products = response;
      },
      error: (err) => {
        console.log(err);

      }
    })
  }



}
