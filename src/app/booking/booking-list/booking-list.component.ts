import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {

  constructor(
    private bookingService: BookingService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public bookings = [];

  /* filtering by guest, if provided */
  public guestId = null;

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.guestId = params.guestId;
        this.getAllBookings({ guestId: params.guestId });
      });
  }

  getAllBookings(raw: any) {
    this.bookingService.getAll(raw).subscribe((response: any) => {
      this.bookings = response;
    });
  }


  onAdd() {
    this.router.navigate(['bookings/new']);
  }

  onEdit(bookingId: any) {
    this.router.navigate(['bookings', bookingId]);
  }

  onDelete(bookingId: any) {
    if (confirm('Da li ste sigurni?')) {
      this.bookingService.deleteOne(bookingId).subscribe(result => {
        this.getAllBookings({});
      });
    }
  }
}
