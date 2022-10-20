import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { UserLoginStartAction } from 'src/app/store/actions/user-action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private store:Store) { }

  ngOnInit(): void {
  }

  getUser(data:NgForm){
    
    this.store.dispatch(new UserLoginStartAction());
    this.userService.loginUser(data.value);
  }

}
