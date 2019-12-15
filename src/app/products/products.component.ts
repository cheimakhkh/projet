import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  filtredproducts:Product[]
  searchForm = new FormGroup({
    'filter':new FormControl('')
  })
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.filtredproducts = this.productService.getProducts()
  }
  onFilter(){
    var filter= this.searchForm.value.filter;
    console.log(filter)
    this.filtredproducts = this.productService.getByFilter(filter)
  }


}
