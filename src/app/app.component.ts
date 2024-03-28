import { Component } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Timeless-Travels';
  constructor(public loaderService: LoaderService, private router: Router) {}

  isNotHomePage(): boolean {
    return this.router.url !== '/homepage';
  }

}
