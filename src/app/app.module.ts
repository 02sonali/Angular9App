import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../services/products.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { RegisterProductComponent } from './products/register-product/register-product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsChildComponent } from './products/product-details/product-details-child/product-details-child.component';
import { ProductPipesPipe } from './products/product-pipes.pipe';
import { ProductHighlightDirective } from './products/product-highlight.directive';
import { AuthenticationService } from 'src/services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    HeaderComponent,
    ProductsComponent,
    ProductDetailsComponent,
    RegisterProductComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent,
    ProductDetailsChildComponent,
    ProductPipesPipe,
    ProductHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProductService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
