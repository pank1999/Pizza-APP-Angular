import { Component, OnInit } from '@angular/core';
import {useerType} from "../../models/user";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  userRegistrationData:useerType ={
    name:'',
    mobileNumber:0,
    email:"",
    password:''
  }

  ngOnInit(): void {
  }

  getData(data:any){
      console.log(data.value);
      this.userRegistrationData=data.value;
  }
}
