import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { GuestListComponent } from './guest-list/guest-list.component';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GuestListComponent, GuestFormComponent],
  imports: [
    CommonModule,
    GuestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class GuestModule { }
