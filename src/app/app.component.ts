import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'client';
  userLoggedIn=true;
  cSize=0;
  toggelUserLoggedIn(val:boolean){
       this.userLoggedIn=val;
  }
}

