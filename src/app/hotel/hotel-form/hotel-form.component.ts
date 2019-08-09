import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  public hotel: any = {};
  public errorMessage = '';


  ngOnInit() {
    this.route.params.subscribe(params => {
      const hotelId = params.id;
      if (hotelId != null) {
        this.getHotel(hotelId);
      }
    });
  }

  onSubmit() {
    delete this.hotel.tags;
    this.hotel.hotelId = 1;

    this.hotelService.submit(this.hotel).subscribe(
      (response: any) => {
        this.toastr.success('Radi više krv ti jebem');
        this.router.navigate(['hotels']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }

  getHotel(hotelId: any) {
    this.hotelService.getOne(hotelId).subscribe(response => {
      this.hotel = response;
      this.hotel.id = hotelId;
    }
    );
  }
}
