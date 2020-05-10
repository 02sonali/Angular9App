import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFields= {username: "" , password: ""};
  invalidDetails = false;
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authenticationService.login(this.loginFields.username, this.loginFields.password)
    .subscribe({
      next(user) {
        console.log(user);
      }
    })
  }

}
