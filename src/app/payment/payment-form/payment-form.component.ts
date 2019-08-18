import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../payment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private router: Router,
    private toastr: ToastrService,
  ) { }

  public payment: any = {};
  public errorMessage = '';


  ngOnInit() {
    this.route.params.subscribe(params => {
      const paymentId = params.id;
      if (paymentId != null) {
        this.getPayment(paymentId);
      }
    });
  }

  onSubmit() {
    delete this.payment.tags;
    this.payment.paymentId = 1;

    this.paymentService.submit(this.payment).subscribe(
      (response: any) => {
        this.toastr.success('Success!');
        this.router.navigate(['payments']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }

  getPayment(paymentId: any) {
    this.paymentService.getOne(paymentId).subscribe(response => {
      this.payment = response;
      this.payment.id = paymentId;
    }
    );
  }
}
