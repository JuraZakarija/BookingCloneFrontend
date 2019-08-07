import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomFormComponent } from './room-form/room-form.component';


const routes: Routes = [
  {path: 'rooms', component: RoomListComponent},
  {path: 'rooms/new', component: RoomFormComponent },
  {path: 'rooms/:id', component: RoomFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
