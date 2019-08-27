import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  public getAll(raw?: any) {
    Object.keys(raw).forEach((key) => (raw[key] == null) && delete raw[key]);

    return this.http.get(this.getRootUrl(), {
      params: raw
    });
  }

  public getByGuest(guestId: any) {
    return this.http.get(this.getRootUrl() + '?guestId=' + guestId);
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

  public onCheck(bookings: any) {
    const params = new HttpParams()
      .set('roomId', bookings.roomId)
      .set('checkIn', bookings.checkIn)
      .set('checkOut', bookings.checkOut);
    return this.http.post(this.getRootUrl() + '/is_available', params);
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
