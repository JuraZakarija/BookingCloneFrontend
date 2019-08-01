import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {

  constructor(
    private paymentService: PaymentService
  ) { }

  public payments = [];

  ngOnInit() {
    this.paymentService.getAll().subscribe((response: any) => {
      this.payments = response;
    });
  }
}
