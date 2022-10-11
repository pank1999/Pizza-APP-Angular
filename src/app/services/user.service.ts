import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient, private route:Router) { }
  Base_url="http://localhost:3000/user";

  addUser(user:any){
    this.http.post(`${this.Base_url}/register`,user).subscribe(data=>{
      console.log(data);
      if(data){
        this.route.navigate(["/"]);
      }
    });
  }
  
  loginUser(user:any){
    console.log(user);
   
    this.http.post(`${this.Base_url}/login`,user).subscribe(res=>{
      console.log(res);
      if(res){
        window.localStorage.setItem("email",user.email);
        this.route.navigate(["/"]);

      }
    });
  }
}
