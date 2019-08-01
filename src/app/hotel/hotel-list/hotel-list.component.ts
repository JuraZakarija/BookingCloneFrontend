import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  constructor(
    private hotelService: HotelService
  ) { }

  public hotels = [];

  ngOnInit() {
    this.hotelService.getAll().subscribe((response: any) => {
      this.hotels = response;
    });
  }
}
