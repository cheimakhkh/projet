import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    'name':new FormControl(''),
    'email':new FormControl(''),
    'tel':new FormControl(''),
    'password':new FormControl(''),
    'password2':new FormControl(''),
  });
  constructor(private register_service:UserService,private route_service:Router) { }

  ngOnInit() {
  }
  onSubmit(){
  this.register_service.register(this.registerForm.value);
  this.route_service.navigate(['/login']);
  }

}
