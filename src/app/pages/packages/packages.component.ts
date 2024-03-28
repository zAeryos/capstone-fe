import { Component, OnInit } from '@angular/core';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.scss'
})
export class PackagesComponent implements OnInit {

  trips: any[] = [];

  constructor(private tripsService: TripsService) { }

  ngOnInit(): void {

    this.tripsService.getClosestDepartureTrips().subscribe(
      (response) => {
        this.trips = (response as any).content;
      },
      (error) => {
        console.error('Error fetching trips:', error);
      }
    );
  }

}
