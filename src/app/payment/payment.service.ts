import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(
    private http: HttpClient
  ) { }

private readonly PAYMENTS_URL = 'payments';

private getRootUrl() {
  return environment.apiUrl + this.PAYMENTS_URL;
}

private formatUrl(paymentId: any) {
  return this.getRootUrl() + '/' + paymentId;
}

public getAll() {
  return this.http.get(this.getRootUrl());
}

public getOne(paymentId: any) {
  return this.http.get(this.formatUrl(paymentId));
}

public deleteOne(paymentId: any) {
  return this.http.delete(this.formatUrl(paymentId));
}

public addOne(payment: any) {
  return this.http.post(this.getRootUrl(), payment);
}

public putOne(paymentId: any, payment: any) {
  return this.http.put(this.formatUrl(paymentId), payment);
}

public submit(payment: any) {
  if (!payment.id) {
    return this.addOne(payment);
  }
  return this.putOne(payment.id, payment);
}
}
