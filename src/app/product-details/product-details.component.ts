import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';


import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  id: string;
  constructor(private route: ActivatedRoute, private userService: UserService, private productService: ProductService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(this.id);
  }
  addToCart() {
    this.userService.addToCurrentUserCart(this.product);
  }
}
