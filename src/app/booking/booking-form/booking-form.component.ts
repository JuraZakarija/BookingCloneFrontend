import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  public booking: any = {};
  public errorMessage = '';


  ngOnInit() {
    this.route.params.subscribe(params => {
      const bookingId = params.id;
      if (bookingId != null) {
        this.getBooking(bookingId);
      }
    });
  }

  onSubmit() {
    delete this.booking.tags;
    this.booking.bookingId = 1;

    this.bookingService.submit(this.booking).subscribe(
      (response: any) => {
        this.toastr.success('Radi više krv ti jebem');
        this.router.navigate(['bookings']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }

  getBooking(bookingId: any) {
    this.bookingService.getOne(bookingId).subscribe(response => {
      this.booking = response;
      this.booking.id = bookingId;
    }
    );
  }
}
