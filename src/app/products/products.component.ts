import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  prods: any;
  product = [];
  constructor(public productservice: ProductsService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  // show() {
  //   this.route.navigateByUrl('/add');
  // }
  getAllProducts() {
    this.productservice.getProducts().subscribe((list) => {
      this.prods = list;
      console.log(list);
    });
  }

  delete(product: any) {
    this.productservice.deleteProduct(product.id).subscribe((response) => {
      this.getAllProducts();
    });
  }
}
