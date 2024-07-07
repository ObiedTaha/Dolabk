import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from 'src/app/products/components/all-products/all-products.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeaderComponent,AllProductsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
