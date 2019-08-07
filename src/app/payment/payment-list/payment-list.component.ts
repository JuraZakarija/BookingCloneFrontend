import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {

  constructor(
    private paymentService: PaymentService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  public payments = [];

  ngOnInit() {
    this.paymentService.getAll().subscribe((response: any) => {
      this.payments = response;
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

  onEdit(paymentId) {
    this.router.navigate(['payments', paymentId]);
  }
}

