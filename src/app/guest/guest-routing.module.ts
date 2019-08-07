import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestFormComponent } from './guest-form/guest-form.component';


const routes: Routes = [
  {path: 'guests', component: GuestListComponent},
  {path: 'guests/new', component: GuestFormComponent },
  {path: 'guests/:id', component: GuestFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
