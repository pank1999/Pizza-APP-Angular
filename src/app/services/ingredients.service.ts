import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { IngredientType } from './cart.service';
import { toArray } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http:HttpClient) { }
  Base_url="http://localhost:3000/Ingredient";

  //Ingredient:IngredientType[];

  Ingredients=[
    {
       id:1,
       img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
       price:100,
       name:"Ing1",
       isSelected:false,
    },
    {
      id:2,
      img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
      price:200,
      name:"Ing2",
      isSelected:false,
   },
   {
    id:3,
    img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
    price:300,
    name:"Ing3",
    isSelected:false,
   },
   {
    id:4,
    img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
    price:400,
    name:"Ing4",
    isSelected:false,
   },
   {
    id:5,
    img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
    price:100,
    name:"Ing5",
    isSelected:false,
 },
 {
   id:6,
   img:"https://imgs.search.brave.com/J10uAlU6uKOFD-5CPIbshJvUfwv7JarAGtmgpmFEdNU/rs:fit:1096:1111:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcGl6emEvcGl6/emFfUE5HNzE1MS5w/bmc",
   price:200,
   name:"Ing6",
   isSelected:false,
 }
  ]

  getIngredients(){
     this.http.get(this.Base_url).subscribe(res=>{
        console.log(res);
        // this.Ingredient=res;
        // console.log(this.Ingredient)
     });
      return this.Ingredients;
  }

  getIngredientById(id:any){
     this.http.get(`${this.Base_url}/${id}`);
  }
  
}
