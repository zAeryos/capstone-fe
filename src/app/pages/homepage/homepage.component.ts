import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ITrip } from '../../models/i-trips';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  @ViewChild('owlCarousel') owlCarousel!: ElementRef;

  trips: any[] = [];

  customOptions!: OwlOptions;

  constructor(private tripsService: TripsService) { }

  ngOnInit(): void {

    this.tripsService.getClosestDepartureTripsLimited().subscribe(
      (response) => {
        this.trips = (response as any).content;
      },
      (error) => {
        console.error('Error fetching trips:', error);
      }
    );

    this.customOptions = {
      autoplay: true,
      smartSpeed: 1000,
      center: false,
      dots: false,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
      ],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    }
  }
}

//TODO make style for button visible on creation
