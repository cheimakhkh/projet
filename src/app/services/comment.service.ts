import { Injectable } from '@angular/core';
import {Comment} from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments:Comment[]=[
    {id:'1',
    time:Date.now(),
    content:'Nice Phone',
    id_user:'1',
    product_id:'1',
    user_name:'dali'
    },
    {id:'2',
    time:Date.now(),
    content:'Heyel',
    id_user:'2',
    product_id:'2',
    user_name:'trgfx'
    }
  ]
  
  constructor() { }
  getCommentById(id:string){
    return this.comments.find(comm => comm.id==id);
  }
  getComments(){
    return this.comments;
  }
  getCommentByUserId(id:string){
    return this.comments.filter(comment => (comment.id_user == id));
  }
  getCommentByProductId(id:string){
    return this.comments.filter(comment => (comment.product_id == id));
  }
  addComment(Comment:Comment){
    // Add the f uuid to generate an id 
    this.comments.push(Comment)
    console.log(this.comments)
  }
  deleteComment(id:string){
    this.comments.filter(Comment => Comment.id != id );
  }
}
