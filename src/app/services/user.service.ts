import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserLoginSuccessAction } from '../store/actions/user-action';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient, private route:Router,private store:Store) { }
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
   
    this.http.post(`${this.Base_url}/login`,user).subscribe(data=>{
      console.log(data);

      this.store.dispatch(new UserLoginSuccessAction({data}))
     
      if(data){
        window.localStorage.setItem("email",user.email);
        this.route.navigate(["/"]);

      }
    });
  }
}
