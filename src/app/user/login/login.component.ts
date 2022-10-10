import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService) { }
  // userData:{email:string,password:string}={
  //   email:'',
  //   password:''
  // };


  ngOnInit(): void {
  }

  getUser(data:NgForm){
    console.log(data.value);
    // this.userData=data.value;
    this.userService.loginUser(data.value);
  }

}
