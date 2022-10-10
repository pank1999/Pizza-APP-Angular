import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  Base_url="http://localhost:3000";

  addUser(user:any){
    this.http.post(`${this.Base_url}/register`,user).subscribe(data=>{
      console.log(data);
    });
  }

  loginUser(user:any){
    console.log(user);
    this.http.post(`${this.Base_url}/login`,user).subscribe(res=>{
      console.log(res);
    });
  }
}
