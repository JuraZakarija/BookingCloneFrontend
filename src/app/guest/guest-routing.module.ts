import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestFormComponent } from './guest-form/guest-form.component';


const routes: Routes = [
  {path: 'users', component: GuestListComponent},
  {path: 'users/new', component: GuestFormComponent },
  {path: 'users/:id', component: GuestFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
