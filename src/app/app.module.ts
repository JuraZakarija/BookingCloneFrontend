import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgencyModule } from './agency/agency.module';
import { BookingModule } from './booking/booking.module';
import { GuestModule } from './guest/guest.module';
import { HotelModule } from './hotel/hotel.module';
import { PaymentModule } from './payment/payment.module';
import { RoomModule } from './room/room.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgencyModule,
    BookingModule,
    GuestModule,
    HotelModule,
    PaymentModule,
    RoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
