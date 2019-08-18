import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';


import { HotelService } from 'src/app/hotel/hotel.service';


@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private hotelService: HotelService,
    private router: Router,
    private toastr: ToastrService,
    private location: Location,
  ) { }


  public room: any = {};
  public hotels: any = [];
  public errorMessage = '';
  public selectedHotelId: any = {};


  ngOnInit() {
    this.route.params.subscribe(params => {
      const roomId = params.id;
      this.getHotels();
      if (roomId != null) {
        this.getRoom(roomId);
      }
    });
  }

  onSubmit() {
    delete this.room.tags;
    this.room.roomId = 1;

    this.roomService.submit(this.room).subscribe(
      (response: any) => {
        this.toastr.success('Success!');
        this.router.navigate(['rooms']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }

  goBack() {
    this.location.back();
  }

  getRoom(roomId: any) {
    this.roomService.getOne(roomId).subscribe(response => {
      this.room = response;
      this.room.id = roomId;
      this.selectedHotelId = this.room.hotelId;
    });
  }

  getHotels() {
    this.hotelService.getAll().subscribe(response => {
      this.hotels = response;
    });
  }
}
