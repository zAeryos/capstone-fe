import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from '../../services/trips.service';
import { BookingService } from '../../services/booking.service';
import { ITrip } from '../../models/i-trips';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.scss'
})
export class TripComponent implements OnInit {

  trip          : any;
  durationDays  : number  = 0;
  trips         : any[]   = [];
  userToken     : string | null  = '';
  formData      : any     = {
    fullName    : '',
    email       : '',
    partNumber  : 0,
  }


  constructor(
    private tripSvc    : TripsService,
    private bookingSvc : BookingService,
    private route      : ActivatedRoute
    ) {
      this.userToken = localStorage.getItem('token');
    }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.tripSvc.getTripById(params.id).subscribe(res => {
        this.trip = res;
        this.calcDurationDays();
        console.log(res)
      })
    })

    this.tripSvc.getClosestDepartureTrips().subscribe(
      (response) => {
        this.trips = (response as any).content;
        this.trips = this.shuffle(this.trips).slice(0, 3);
      },
      (error) => {
        console.error('Error fetching trips:', error);
      }
    );

  }

  onSubmit() {
    if (this.userToken) {
      console.log(this.formData)
      if (this.formData.partNumber) {
        this.bookingSvc.createBooking(this.userToken, this.trip.trip_id, this.formData.partNumber).subscribe(
          (response) => {
            console.log('Booking created Successfully:', response)
        },
        (error) => {
          console.error('Error creating booking:', error);
        })
      } else {
        console.error('Participants number not found')
      }
    } else {
      console.error('User token was not found')
    }
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue: any;
    let randomIndex: number;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  calcDurationDays() {

    const departureDate = new Date(this.trip.departureDate);
    const returningDate = new Date(this.trip.returningDate);

    const differenceMs  = returningDate.getTime() - departureDate.getTime();

    this.durationDays   = differenceMs / (1000 * 60 * 60 * 24);

  }

}
