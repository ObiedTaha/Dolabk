import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http:HttpClient) { }
  BaseUrl:string=`https://fakestoreapi.com/`;

  getAllProducts():Observable<any>{
    return this.http.get(`${this.BaseUrl}products`);
  };

  getAllCategories():Observable<any>
  {
    return this.http.get(`${this.BaseUrl}products/categories`)
  };

  getSpecificCategory(category:string):Observable<any>{
    return this.http.get(`${this.BaseUrl}products/category/${category}`);
  };

}
