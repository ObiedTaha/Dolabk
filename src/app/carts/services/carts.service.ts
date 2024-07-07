import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
baseUrl:string=`https://fakestoreapi.com/`
  constructor(private _HttpClient:HttpClient) { }

  creatNewCart(model:any):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}carts`,model)
  }
}
