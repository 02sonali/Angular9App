import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let url: string = state.url;
      return this.checkLogin(url);
  }
  
  checkLogin(url: string): boolean {
    if (this.authService.isLoggedInUser()) {
      return true;  //todo-how to prevent redirecting to login page when user is already logged in
    }   

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;

  }
}
