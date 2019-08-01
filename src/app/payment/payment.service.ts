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

public getAll() {
  return this.http.get(environment.apiUrl + this.PAYMENTS_URL);
  }
}
