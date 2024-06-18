import { Component, Input, OnInit } from '@angular/core';
import { Trip } from 'src/app/interfaces/trip';

@Component({
  selector: 'app-trip-info',
  templateUrl: './trip-info.page.html',
  styleUrls: ['./trip-info.page.scss'],
})
export class TripInfoPage implements OnInit {

  trip!: Trip;

  constructor() { }

  ngOnInit(): void {
    this.trip = history.state.trip;
  }

}
