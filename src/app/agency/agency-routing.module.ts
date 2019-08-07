import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgencyListComponent } from './agency-list/agency-list.component';
import { AgencyFormComponent } from './agency-form/agency-form.component';


const routes: Routes = [
  {path: 'agencies', component: AgencyListComponent},
  {path: 'agencies/new', component: AgencyFormComponent },
  {path: 'agencies/:id', component: AgencyFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
