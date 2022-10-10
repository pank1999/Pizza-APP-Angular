import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {useerType} from "../../models/user";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService) { }

  userRegistrationData:useerType ={
    name:'',
    mobileNumber:"",
    email:"",
    password:''
  }

  ngOnInit(): void {
  }

  getData(data:any){
      console.log(data.value);
      this.userRegistrationData=data.value;
      this.userService.addUser(this.userRegistrationData);

  }
  
}
