import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models/comment';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss']
})
export class CommentListComponent implements OnInit {
  @Input()comments:Comment[]
  @Input()productId:string
  commentForm=new FormGroup({
    comment: new FormControl(''),
  })
  constructor(private commentService:CommentService,private userService:UserService) { }

  ngOnInit() {
    console.log("comment lsit ",this.comments)
  }
  addComment(){
    let user:User = this.userService.getCurrentUser();
    //console.log(user)
    var newComment:Comment={
      id:"12+2",
      content:this.commentForm.get('comment').value,
      id_user:user.id || "1337",
      time:Date.now(),
      product_id:this.productId,
      user_name:user.name || "admin"
    }
    this.comments.unshift(newComment)
    this.commentService.addComment(newComment)
    
  }

}
