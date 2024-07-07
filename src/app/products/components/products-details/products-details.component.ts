import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct } from 'src/app/shared/interfaces/iproduct';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule,SpinnerComponent],
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id: any;
  product: any = {};
  loading: boolean = false;
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService: ProductsService) {}

  ngOnInit() {
    this.id = this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getProductDetails();
  }

  getProductDetails(): void {
    this.loading=true;
    this._ProductsService.getProductDetails(this.id).subscribe({
      next: (response) => {
        this.product=response;
        this.loading=false;
      },
      error:(err)=>{
        this.loading=false;
      }
    })
  }

}
