import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts:Product[]
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.cartProducts = this.userService.getCurrentUser().cart
    //console.log(this.cartProducts)
  }

}
