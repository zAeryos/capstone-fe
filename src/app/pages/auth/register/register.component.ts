import { Component } from '@angular/core';
import { UserRegister } from '../../../models/i-user-dto';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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


  constructor(
    private userService : UserService,
    private router      : Router,
    private toastr      : ToastrService
    ) {}

  registerUser() {
    this.registering = true;
    this.userService.register(this.userRegister)
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
          this.toastr.success('You will be redirected to the login page..', 'Registration successful!')
          this.registering          = false;
          setTimeout(() => {
            this.router.navigate(['auth/login'])
          }, 2500);
        },
        (error) => {
          console.error('Registration error:', error);
          this.registering              = false;
          this.toastr.error('Please try again.', 'Registration failed')
        }
      );
  }

}
