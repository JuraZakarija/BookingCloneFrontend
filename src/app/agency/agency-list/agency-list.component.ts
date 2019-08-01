import { Component, OnInit } from '@angular/core';
import { AgencyService } from '../agency.service';


@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {

  constructor(
    private agencyService: AgencyService
  ) { }

  public agencies = [];

  ngOnInit() {
    this.agencyService.getAll().subscribe((response: any) => {
      this.agencies = response;
    });
  }
}
