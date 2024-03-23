import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isSticky: boolean = false;


  constructor(private elementRef: ElementRef) {}

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

}
