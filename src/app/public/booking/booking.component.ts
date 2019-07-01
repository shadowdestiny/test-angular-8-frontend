import { Component, OnInit } from '@angular/core';
import {Booking} from './models/booking.model';
import {BookingService} from './services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookings: Array<Booking>;
  id: BigInteger;
  init: Date;
  end: Date;
  firstName: string;

  constructor( public bookingService: BookingService) { }

  ngOnInit() {
    this.filter();
  }
  public filter() {

    this.bookingService.getBookings(this.init, this.end, this.id, this.firstName).subscribe(
      (vehicles) => {
        this.bookings = vehicles;
      },
      error => console.error(error),
    );
  }

}
