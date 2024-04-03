import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../../models/i-user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  isSticky    : boolean = false;
  isLoggedIn  : boolean = false;

  constructor (
    private elementRef  : ElementRef,
    private router      : Router,
    private userSvc     : UserService,
    private toastr      : ToastrService
    ) {

    }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbarHeight = this.elementRef.nativeElement.querySelector('.navbar').offsetHeight;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > navbarHeight + 55) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

  ngOnInit(): void {
    this.isLoggedIn = this.userSvc.isLoggedIn();
    console.log(this.isLoggedIn);
    this.userSvc.loggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  private checkLoginStatus(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('token');
      this.isLoggedIn = token !== null;
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('homepage');
    this.checkLoginStatus();
    this.toastr.info('You have been logged out!');
  }
}
