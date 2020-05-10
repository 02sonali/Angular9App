import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appName: string = 'myToolBox';
  isLoggedIn:Boolean = false;

  constructor(private authenticationService: AuthenticationService) { 
    this.authenticationService.currentUser.subscribe(x => this.isLoggedIn = x ? true: false);
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isLoggedInUser();
  }

  logout() {
    this.authenticationService.logout();
  }

}
