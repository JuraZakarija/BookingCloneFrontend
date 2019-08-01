import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  constructor(
    private bookingService: BookingService
  ) { }

  public bookings = [];

  ngOnInit() {
    this.bookingService.getAll().subscribe((response: any) => {
      this.bookings = response;
    });
  }
}
