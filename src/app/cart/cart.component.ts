import { Component, OnInit } from '@angular/core';

export interface IngredientType{
  name:string,
  price:number,
  img:string
}

export interface pizzaType{
  id:number,
  TotalPrice:number,
  IngQuantity:number,
  IngArray:IngredientType[]
}

const cartData:pizzaType[]=[
  {
   id:1,
   TotalPrice:200,
   IngQuantity:3,
   IngArray:[
    {name:'Ing1',price:50,img:"https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"},
    {name:'Ing2',price:100,img:"https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"},
    {name:'Ing3',price:50,img:"https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"},
  ]
  },
  {
    id:2,
    TotalPrice:100,
    IngQuantity:2,
    IngArray:[
     {name:'Ing1',price:50,img:"https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"},
     {name:'Ing2',price:50,img:"https://img.freepik.com/premium-vector/pizza-logo-design_9845-319.jpg?w=2000"},
   ]
   }
]

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource =cartData;
  ngOnInit(): void {
  }

}
