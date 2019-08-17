import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

import { AgencyService } from 'src/app/agency/agency.service';
import { GuestService } from 'src/app/guest/guest.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {

  constructor(
    private paymentService: PaymentService,
    private toastr: ToastrService,
    private router: Router,
    private agencyService: AgencyService,
    private guestService: GuestService,
  ) { }

  public payments = [];
  public guests: any  = {};
  public agencies: any = {};

  ngOnInit() {
    this.paymentService.getAll().subscribe((response: any) => {
      this.payments = response;
      this.getAgencies();
      this.getGuests();
    });
  }

  getAllPayments() {
    this.paymentService.getAll().subscribe((response: any) => {
      this.payments = response;
    });
  }


  onAdd() {
    this.router.navigate(['payments/new']);
  }

  onEdit(paymentId: any) {
    this.router.navigate(['payments', paymentId]);
  }

  getAgencies() {
    this.agencyService.getAll().subscribe(response => {
      this.agencies = response;
    });
  }

  getGuests() {
    this.guestService.getAll().subscribe(response => {
      this.guests = response;
    });
  }
}

