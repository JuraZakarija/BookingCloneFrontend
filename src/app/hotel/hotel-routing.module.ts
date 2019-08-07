import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelFormComponent } from './hotel-form/hotel-form.component';


const routes: Routes = [
  {path: 'hotels', component: HotelListComponent},
  {path: 'hotels/new', component: HotelFormComponent },
  {path: 'hotels/:id', component: HotelFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule { }
