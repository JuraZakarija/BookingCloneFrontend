import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {

  constructor(
    private agencyService: AgencyService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  public agencies = [];

  ngOnInit() {
    this.agencyService.getAll().subscribe((response: any) => {
      this.agencies = response;
    });
  }

  getAllAgencies() {
    this.agencyService.getAll().subscribe((response: any) => {
      this.agencies = response;
    });
  }


  onAdd() {
    this.router.navigate(['agencies/new']);
  }

  onEdit(agencyId) {
    this.router.navigate(['agencies', agencyId]);
  }
}
