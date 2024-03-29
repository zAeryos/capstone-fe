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

  pageTitle   : string    = 'Login';
  userLogin   : UserLogin = {
    username: '',
    password: ''
  }

  logging     : boolean   = false;
  isLoggedIn  : boolean   = false;

  constructor(private userService: UserService, private router: Router) {}

  loginUser() {
    this.logging = true;
    this.userService.login(this.userLogin)
      .subscribe(
        (response:any) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.accessToken);
          this.userService.updateLoginStatus();
          setTimeout(() => {
            this.router.navigate(['homepage'])
            this.isLoggedIn = true;
          }, 2000);
        },
        (error) => {
          console.error('Login error:', error);
          setTimeout(() => {
            this.logging = false;
          }, 1000);
        }
      );
  }
}
