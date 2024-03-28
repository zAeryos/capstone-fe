import { Component } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';
import { SaveEmail } from '../../models/i-email';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {

  email: string = '';

  constructor(private newsletterService: NewsletterService) {}

  saveEmail(): void {
    const newEmail: SaveEmail = {
      email: this.email
    };

    this.newsletterService.saveEmail(newEmail).subscribe(
      () => {
        console.log('Email subscribed successfully.');
        this.email = '';
      },
      (error) => {
        console.error('Error subscribing email:', error);
      }
    );
  }
}
