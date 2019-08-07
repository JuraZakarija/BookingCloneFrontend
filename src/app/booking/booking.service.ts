import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly BOOKINGS_URL = 'bookings';

  public getAll() {
    return this.http.get(environment.apiUrl + this.BOOKINGS_URL);
    }

    public deleteOne(bookingId) {
      return this.http.delete(environment.apiUrl + this.BOOKINGS_URL + '/' + bookingId);
    }

    public getOne(bookingId) {
      return this.http.get(environment.apiUrl + this.BOOKINGS_URL + '/' + bookingId);
    }
  }
