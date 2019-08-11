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

  private getRootUrl() {
    return environment.apiUrl + this.BOOKINGS_URL;
  }

  private formatUrl(bookingId: any) {
    return this.getRootUrl() + '/' + bookingId;
  }

  public getAll() {
    return this.http.get(this.getRootUrl());
  }

  public getOne(bookingId: any) {
    return this.http.get(this.formatUrl(bookingId));
  }

  public deleteOne(bookingId: any) {
    return this.http.delete(this.formatUrl(bookingId));
  }

  public addOne(booking: any) {
    return this.http.post(this.getRootUrl(), booking);
  }

  public putOne(bookingId: any, booking: any) {
    return this.http.put(this.formatUrl(bookingId), booking);
  }

  public submit(booking: any) {
    if (!booking.id) {
      return this.addOne(booking);
    }
    return this.putOne(booking.id, booking);
  }
}
