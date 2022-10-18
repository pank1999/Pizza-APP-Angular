import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IngredientType } from './cart.service';
import { Observable, toArray } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootReducerState } from '../store/reducers';
import { CartSuccessAction } from '../store/actions/cart.action';
import { IngredinetListSuccessAction } from '../store/actions/ingredinet.action';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  constructor(private http: HttpClient,private store:Store<RootReducerState>) {}
  Base_url = 'http://localhost:3000/Ingredient';

  Ingredient!:Observable<any>;

  getIngredients() {
    this.Ingredient=this.http.get(this.Base_url);
    this.Ingredient.subscribe(res=>{
      this.store.dispatch(new IngredinetListSuccessAction({data:res}));
    });

    return  this.Ingredient;
     
  }

  getIngredientById(id: any) {
    this.http.get(`${this.Base_url}/${id}`);
  }
}
