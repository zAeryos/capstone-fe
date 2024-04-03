import { Component } from '@angular/core';
import { UserLogin } from '../../../models/i-user-dto';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  pageTitle         : string    = 'Login';
  userLogin         : UserLogin = {
    username: '',
    password: ''
  }
  logging           : boolean   = false;
  isLoggedIn        : boolean   = false;
  loginSuccess      : boolean   = false;
  loginError        : boolean   = false;
  loginErrorMessage : string    = '';

  constructor(private userService: UserService, private router: Router) {}

  loginUser() {
    this.logging = true;
    this.userService.login(this.userLogin)
      .subscribe(
        (response:any) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.accessToken);
          this.userService.updateLoginStatus();
          this.loginSuccess = true;
          setTimeout(() => {
            this.router.navigate(['homepage'])
            this.isLoggedIn = true;
          }, 2500);
        },
        (error) => {
          console.error('Login error:', error);
          this.loginError = true;
          this.loginErrorMessage = 'Username or password are incorrect.'
          setTimeout(() => {
            this.logging    = false;
            this.loginError = false;
          }, 2000);
        }
      );
  }
}
