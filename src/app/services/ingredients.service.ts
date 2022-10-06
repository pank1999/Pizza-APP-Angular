import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http:HttpClient) { }
  Base_url="localhost:3000/api/ingredients";

  Ingredients=[
    {
       id:1,
       img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
       price:100,
       Name:"Ing1",
       isSelected:false,
    },
    {
      id:2,
      img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
      price:200,
      Name:"Ing2",
      isSelected:false,
   },
   {
    id:3,
    img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
    price:300,
    Name:"Ing3",
    isSelected:false,
   },
   {
    id:4,
    img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
    price:400,
    Name:"Ing4",
    isSelected:false,
   },
   {
    id:5,
    img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
    price:100,
    Name:"Ing5",
    isSelected:false,
 },
 {
   id:6,
   img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
   price:200,
   Name:"Ing6",
   isSelected:false,
},
{
 id:7,
 img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
 price:300,
 Name:"Ing7",
 isSelected:false,
},
{
 id:8,
 img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
 price:600,
 Name:"Ing8",
 isSelected:false,
}
  ]

  getIngredients(){
     // this.http.get(this.Base_url);
      return this.Ingredients;
  }

  getIngredientById(id:any){
     this.http.get(`${this.Base_url}/${id}`);
  }
  
}
