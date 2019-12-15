import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Product } from '../models/product';
// install uuid to generate unique id for user 
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[] = [{id:"1",
  email:"admin@admin.com",
  password:"admin",
  name:"admin",
  comments:[],
  cart:[]

  }]
  loggedUser:User
  cartCount=0
  constructor() { }
  getUsers(){
    return this.users;
  }
  getUserById(id){
    return this.users.find(user => user.id==id);
  }
  register(user){
    // Add the f uuid to generate an id 
    user.id=user.email+user.name+"2549451lkiohij";
    user.cart=[]
    this.users.push(user);
    
    //console.log(this.users)
  }
  login(userToFind){
    var user = this.users.find(user => user.email==userToFind.email && user.password == userToFind.password);
    if(user){
      this.loggedUser = user;
      console.log("logged user ",user)
    }
    return user;
  }
  getCurrentUser(){
    return this.loggedUser;
  }
  addToCurrentUserCart(product:Product){
    this.loggedUser.cart.push(product);
    this.cartCount = this.loggedUser.cart.length;
  }
}
