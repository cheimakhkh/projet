import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:Product
  comments:Comment[]
  id:string
  constructor(private route:ActivatedRoute,private userService:UserService,private commentService:CommentService, private productService:ProductService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(this.id);
    this.comments = this.commentService.getCommentByProductId(this.id)
  }
  addToCart(){
    this.userService.addToCurrentUserCart(this.product);
  }
}
