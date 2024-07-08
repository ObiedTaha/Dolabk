import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'register', loadComponent: () => import('./auth/components/register/register.component').then(m => m.RegisterComponent), title: 'Register' },
  { path: 'login', loadComponent: () => import('./auth/components/login/login.component').then(m => m.LoginComponent), title: 'Login' },
  { path:'home',loadComponent:()=>import('./shared/components/home/home.component').then(m=>m.HomeComponent),title:'Home'},
  { path: 'products', loadComponent: () => import('./products/components/all-products/all-products.component').then(m => m.AllProductsComponent), title: 'Products' },
  { path: 'productDetails/:id', loadComponent: () => import('./products/components/products-details/products-details.component').then(m => m.ProductsDetailsComponent), title: 'Product Details' },
  { path: 'cart', loadComponent: () => import('./carts/components/cart/cart.component').then(m => m.CartComponent), title: 'Cart' },
  {path:'contacts',loadComponent:()=>import('./components/contacts/contacts.component').then(m=>m.ContactsComponent),title:'Contacts'},
  {path:'about',loadComponent:()=>import('./components/aboutus/aboutus.component').then(m=>m.AboutusComponent),title:'About Us'},
  { path: '**', loadComponent: () => import('./shared/components/notfound/notfound.component').then(m => m.NotfoundComponent), title: 'Not Found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
