import { Component } from '@angular/core';
import { UserLogin } from '../../../models/i-user-dto';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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


  constructor(
    private userService : UserService,
    private router      : Router,
    private toastr      : ToastrService
    ) {}

  loginUser() {
    this.logging = true;
    this.userService.login(this.userLogin)
      .subscribe(
        (response:any) => {
          console.log('Login successful:', response);
          localStorage.setItem('token', response.accessToken);
          this.userService.updateLoginStatus();
          this.toastr.success('Redirecting...', 'Login successful!')
          setTimeout(() => {
            this.router.navigate(['homepage'])
            this.isLoggedIn = true;
          }, 2500);
        },
        (error) => {
          console.error('Login error:', error);
          this.toastr.error('Username or password are incorrect.', 'Oops!')
        }
      );
  }
}
