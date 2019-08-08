import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyFormComponent } from './agency-form/agency-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AgencyListComponent, AgencyFormComponent],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    FormsModule,
  ]
})
export class AgencyModule { }
