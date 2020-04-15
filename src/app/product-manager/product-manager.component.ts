import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service'
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css',
              '../css/datatables.bundle.css',
              '../css/jasny-bootstrap.min.css',
              '../css/nestable.css',
              '../css/style.bundle.css',
              '../css/verdors.bundle.css',]
})
export class ProductManagerComponent implements OnInit {

  products: Product[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(response => this.products =
    response, error => console.log(error));
  }
}