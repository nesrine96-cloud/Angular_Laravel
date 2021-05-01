import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  base_path = 'http://localhost:8000/api/products/';
  constructor(public http: HttpClient) {}

  //Create a new item
  createProduct(item: any): Observable<Product> {
    return this.http.post<Product>(
      'http://localhost:8000/api/products/add',
      item
    );
  }

  //Get products data
  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.base_path + 'index');
  }

  //Update item by id
  updateProduct(id: number, item: any): Observable<Product> {
    return this.http.put<Product>(
      'http://localhost:8000/api/products/edit' + id,
      item
    );
  }

  //Delete item by id
  deleteProduct(id: any) {
    return this.http.delete<Product>(
      'http://localhost:8000/api/products/delete' + id
    );
  }
}
