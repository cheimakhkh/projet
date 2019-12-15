import { Component, OnInit, OnChanges } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
  })

  export class footerComponent implements OnInit,OnChanges {
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
  