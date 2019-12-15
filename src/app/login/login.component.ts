import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormControlName } from '@angular/forms'
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    'email':new FormControl(''),
    'password': new FormControl('')
  })
  check:boolean=false
  constructor(private user_service:UserService,private routeservice:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    var res=this.user_service.login(this.loginForm.value);
    if (res){
      this.routeservice.navigate(['/products']);
    }else{
      this.check = true;
    }

  }

}
