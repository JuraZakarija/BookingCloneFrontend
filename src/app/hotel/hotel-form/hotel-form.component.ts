import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) { }

  public hotel: any = {};

  ngOnInit() {
    this.route.params.subscribe(params => {
      const hotelId = params['id'];
      if (hotelId != null) {
        this.getAgency(hotelId);
      }
    });
  }

  getAgency(hotelId) {
    this.hotelService.getOne(hotelId).subscribe(response => {
      this.hotel = response;
      this.hotel.id = hotelId;
    }
    );
  }
}
