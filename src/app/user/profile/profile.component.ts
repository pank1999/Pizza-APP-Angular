import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { get_User, RootReducerState } from 'src/app/store/reducers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private store:Store<RootReducerState>) { }
  userLoggedIn:any;
  ngOnInit(): void {
    this.store.select(get_User).subscribe(res=>{
      this.userLoggedIn=res;
      });
  }

}
