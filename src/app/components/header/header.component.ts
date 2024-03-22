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
    const navbar = this.elementRef.nativeElement.querySelector('.navbar');
    if (window.pageYOffset > navbar.offsetTop) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }

}
