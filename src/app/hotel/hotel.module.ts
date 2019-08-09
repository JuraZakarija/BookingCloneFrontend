import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelRoutingModule } from './hotel-routing.module';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HotelListComponent, HotelFormComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    FormsModule,
  ]
})
export class HotelModule { }
