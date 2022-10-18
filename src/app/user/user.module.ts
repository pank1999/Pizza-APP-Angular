import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {FormsModule} from "@angular/forms";
import { ProfileComponent } from './profile/profile.component'
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    MatCardModule,
    MatIconModule,
    MatButtonModule   
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class UserModule { }
