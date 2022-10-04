import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userData:{email:string,password:string}={
    email:'',
    password:''
  };


  ngOnInit(): void {
  }
  getData(data:NgForm){
    console.log(data.value);
    this.userData=data.value;
  }

}
