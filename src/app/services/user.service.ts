import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient) { }
  Base_url="localhost:3000/api/user/register"
  
  addUser(user:any){
     this.http.post(this.Base_url,user);
  }

  getUser(){
     this.http.get(this.Base_url);
  }
}
