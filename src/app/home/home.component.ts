import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productPc:Product[]
  productSP:Product[]
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productPc = this.loadProductByCategory("computer");
    this.productSP = this.loadProductByCategory("phone");
    console.log(this.productPc)
    console.log(this.productSP)

  }
  loadProductByCategory(cat:string){
  return    this.productService.getProductByCategory(cat);
  }
}
