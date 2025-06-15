import { Component,OnInit } from '@angular/core';
//import {trips} from '../data/trips';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data';
import { Router } from '@angular/router';


@Component({
selector: 'app-trip-listing',
standalone: true,
imports: [CommonModule, TripCardComponent],
templateUrl: './trip-listing.html',
styleUrl: './trip-listing.css',
providers: [TripDataService]

})
export class TripListingComponent implements OnInit {
//trips: Array<any> = trips;
 trips!: Trip[]
 message: string = '';
  
 constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {
    console.log('trip-listing constructor')
  }
  public addTrip(): void {
    this.router.navigate(['add-trip'])
  }

   private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value
          if(value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.'
          } else {
            this.message = 'There were no trips retrieved from the database'
          }
          console.log(this.message)
        },
        error: (error: any) => {
          console.error('Error: ' + error);
          this.message = 'Failed to load trips. Please try again later.';

        }
      })
  }

ngOnInit(): void {
  console.log('ngOnInit')
 this.getStuff()
}
}

