import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadComponent: () => import('./products/components/all-products/all-products.component').then(m => m.AllProductsComponent), title: 'Products' },
  { path: 'productDetails', loadComponent: () => import('./products/components/products-details/products-details.component').then(m => m.ProductsDetailsComponent), title: 'Product Details' },
  { path: 'cart', loadComponent: () => import('./carts/components/cart/cart.component').then(m => m.CartComponent), title: 'Cart' },
  { path: '**', loadComponent: () => import('./shared/components/notfound/notfound.component').then(m => m.NotfoundComponent), title: 'Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
