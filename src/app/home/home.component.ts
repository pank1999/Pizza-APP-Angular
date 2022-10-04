import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
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
   }
  ]
  selectedIngredient:number[]=[];

  ngOnInit(): void {
  }
  bgcolor="white";
  selectIngredient(id:number){
     this.Ingredients.map(item=>{
        if(item.id===id){
          item.isSelected=!item.isSelected;
          item.isSelected? this.selectedIngredient.push(item.id): this.selectedIngredient.pop();
        }
     });
    
  }
}
