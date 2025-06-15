import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trip-card',
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip: any;

   constructor(private router: Router) {}

  ngOnInit(): void {

  }
  public editTrip(trip: Trip) {
    localStorage.removeItem('tripCode')
    localStorage.setItem('tripCode', trip.code)
    this.router.navigate(['edit-trip'])
  }
}