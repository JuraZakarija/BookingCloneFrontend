import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


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

  onRoomCountClick(hotelId: any) {
    this.router.navigate(['rooms'], { queryParams: {hotelId}
    });
  }





  onAdd() {
    this.router.navigate(['hotels/new']);
  }

  onEdit(hotelId: any) {
    this.router.navigate(['hotels', hotelId]);
  }

  addRoom(hotelId: any) {
    this.router.navigate(['rooms/new/:hotelId']);
  }
}
