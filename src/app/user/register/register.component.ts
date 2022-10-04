import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  userRegistrationData:{name:string,mobileNumber:number,email:string,password:string} ={
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
