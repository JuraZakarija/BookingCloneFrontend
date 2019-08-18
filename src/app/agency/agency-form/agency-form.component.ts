import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyService } from '../agency.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss']
})
export class AgencyFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private agencyService: AgencyService,
    private router: Router,
    private toastr: ToastrService,
    private location: Location,
  ) { }

  public agency: any = {};
  public errorMessage = '';


  ngOnInit() {
    this.route.params.subscribe(params => {
      const agencyId = params.id;
      if (agencyId != null) {
        this.getAgency(agencyId);
      }
    });
  }

  onSubmit() {
    delete this.agency.tags;
    this.agency.agencyId = 1;

    this.agencyService.submit(this.agency).subscribe(
      (response: any) => {
        this.toastr.success('Success!');
        this.router.navigate(['agencies']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }

  goBack() {
    this.location.back();
  }

  getAgency(agencyId: any) {
    this.agencyService.getOne(agencyId).subscribe(response => {
      this.agency = response;
      this.agency.id = agencyId;
    }
    );
  }
}
