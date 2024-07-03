import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './components/spinner/spinner.component';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    SpinnerComponent,
    HttpClientModule

  ],
  exports: [
    HeaderComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
