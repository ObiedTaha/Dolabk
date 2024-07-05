import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    SpinnerComponent,
    HttpClientModule,
    SelectComponent,
    ProductsCardComponent,
    NavbarComponent,
    FooterComponent

  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent, 
    ProductsCardComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
