import { Component } from '@angular/core';
import { UserRegister } from '../../../models/i-user-dto';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  userRegister: UserRegister = {
    name: '',
    surname: '',
    username: '',
    password: '',
    phoneNumber: '',
    birthday: new Date(),
    email: ''
  };

  registering               : boolean = false;
  registrationSuccess       : boolean = false;
  registrationError         : boolean = false;
  registrationErrorMessage  : string  = '';

  constructor(private userService: UserService, private router: Router) {}

  registerUser() {
    this.registering = true;
    this.userService.register(this.userRegister)
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
          this.registrationSuccess  = true;
          this.registering          = false;
          setTimeout(() => {
            this.router.navigate(['auth/login'])
          }, 2500);
        },
        (error) => {
          console.error('Registration error:', error);
          this.registering              = false;
          this.registrationError        = true;
          this.registrationErrorMessage = 'Registration failed, please try again.'
          setTimeout(() => {
            this.registrationError = false;
          }, 3000);
        }
      );
  }

}
