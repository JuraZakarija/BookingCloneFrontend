import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


import { HotelService } from 'src/app/hotel/hotel.service';
import { AgencyService } from 'src/app/agency/agency.service';
import { GuestService } from 'src/app/guest/guest.service';
import { RoomService } from 'src/app/room/room.service';


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
    private hotelService: HotelService,
    private agencyService: AgencyService,
    private guestService: GuestService,
    private roomService: RoomService,
    private location: Location,


  ) { }

  public booking: any = {};
  public errorMessage = '';

  public hotels: any = [];
  public selectedHotelId: any = {};

  public agencies: any = [];
  public selectedAgencyId: any = {};

  public guests: any = [];
  public selectedGuestId: any = {};

  public rooms: any = [];
  public selectedRoomId: any = {};


  ngOnInit() {
    this.route.params.subscribe(params => {
      const bookingId = params.id;
      this.getHotels();
      this.getAgencies();
      this.getGuests();
      this.getRooms();
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
        this.toastr.success('Success!');
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
      this.selectedGuestId = this.booking.guestId;
      this.selectedAgencyId = this.booking.agencyId;
      this.selectedHotelId = this.booking.hotelId;
      this.selectedRoomId = this.booking.roomId;
    });
  }

  goBack() {
    this.location.back();
  }

  onHotelChange(newHotelId) {
    this
      .roomService
      .getByHotel(newHotelId)
      .subscribe(response => {
        this.rooms = response;
      });
  }

  getHotels() {
    this.hotelService.getAll().subscribe(response => {
      this.hotels = response;
    });
  }

  getAgencies() {
    this.agencyService.getAll().subscribe(response => {
      this.agencies = response;
    });
  }

  getGuests() {
    this.guestService.getAll().subscribe(response => {
      this.guests = response;
    });
  }

  getRooms() {
    this.roomService.getAll().subscribe(response => {
      this.rooms = response;
    });
  }
}
