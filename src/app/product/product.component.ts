import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product:Product
  constructor(private router:Router) { }

  ngOnInit() {
    
    
  }
  checkDetails(){
    // go to product details
    this.router.navigate(['/product-details',this.product.id]);
  }

}
