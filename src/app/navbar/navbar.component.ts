import { Component, OnInit ,OnChanges} from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,OnChanges {
  logged:User
  count:number
  constructor(private userService:UserService) { }
  
  ngOnInit() {
    
  }

  ngOnChanges(){
    
    if(this.logged ){
      this.count = this.logged.cart.length;
    }
  }

}
