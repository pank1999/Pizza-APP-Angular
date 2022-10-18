import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    {path:'login',component:LoginComponent},
    { path: '', component: HomeComponent },
    {path:'cart',component:CartComponent},
    {path:'orders' , component:OrdersComponent},
    {path:'Profile',component:ProfileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }