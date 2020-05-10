import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { RegisterProductComponent } from './products/register-product/register-product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { AuthenticationGuard }  from './authentication.guard';

const routes: Routes = [
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'products', component: ProductsComponent},
  {path: "products/:id", component: ProductDetailsComponent},
  {path: 'register-product', component: RegisterProductComponent, canActivate: [AuthenticationGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: WelcomePageComponent},
  // {path: "**", component: PageNotFoundComponent} //wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
