import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RoomFormComponent } from 'src/app/room/room-form/room-form.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  constructor(
    private hotelService: HotelService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  public hotels = [];

  ngOnInit() {
    this.hotelService.getAll().subscribe((response: any) => {
      this.hotels = response;
    });
  }
  getAllHotels() {
    this.hotelService.getAll().subscribe((response: any) => {
      this.hotels = response;
    });
  }


  onAdd() {
    this.router.navigate(['hotels/new']);
  }

  onEdit(hotelId: any) {
    this.router.navigate(['hotels', hotelId]);
  }

  addRoom(hotelId: any) {
    this.router.navigate(['rooms/new']);
  }
}
