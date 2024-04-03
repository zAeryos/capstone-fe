import { Component } from '@angular/core';
import { NewsletterService } from '../../services/newsletter.service';
import { SaveEmail } from '../../models/i-email';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent {

  email : string = '';

  constructor(
    private newsletterService: NewsletterService,
    private toastr           : ToastrService
    ) {
      this.email = '';
    }

  saveEmail(): void {
    const newEmail: SaveEmail = {
      email: this.email
    };

    this.newsletterService.saveEmail(newEmail).subscribe(
      () => {
        console.log('Email subscribed successfully.');
        this.email = '';
        this.toastr.success('You have subscribed to the newsletter!', 'Success');
      },
      (error) => {
        console.error('Error subscribing email:', error);
        this.toastr.error('The email is already subscribed!', 'Error');
      }
    );
  }
}
