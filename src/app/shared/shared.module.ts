import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';





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
    FooterComponent,
    HomeComponent

  ],
  exports: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent, 
    ProductsCardComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class SharedModule { }
