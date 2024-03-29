import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TripsService } from '../../services/trips.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.scss'
})
export class TripComponent implements OnInit {

  trip: any;

  constructor(
    private tripSvc : TripsService,
    private route   : ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.tripSvc.getTripById(params.id).subscribe(res => {
        this.trip = res;
        console.log(res)
      })
    })
  }

}
