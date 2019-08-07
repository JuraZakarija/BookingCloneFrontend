import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingFormComponent } from './booking-form/booking-form.component';


const routes: Routes = [
  {path: 'bookings', component: BookingListComponent},
  {path: 'bookings/new', component: BookingFormComponent },
  {path: 'bookings/:id', component: BookingFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
