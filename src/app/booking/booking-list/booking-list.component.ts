import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  constructor(
    private bookingService: BookingService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  public bookings = [];

  ngOnInit() {
    this.bookingService.getAll().subscribe((response: any) => {
      this.bookings = response;
    });
  }

  getAllBookings() {
    this.bookingService.getAll().subscribe((response: any) => {
      this.bookings = response;
    });
  }


  onAdd() {
    this.router.navigate(['bookings/new']);
  }

  onEdit(bookingId) {
    this.router.navigate(['bookings', bookingId]);
  }
}
