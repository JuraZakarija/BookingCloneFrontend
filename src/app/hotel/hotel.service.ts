import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private http: HttpClient
  ) { }

private readonly HOTELS_URL = 'hotels';

private getRootUrl() {
  return environment.apiUrl + this.HOTELS_URL;
}

private formatUrl(hotelId: any) {
  return this.getRootUrl() + '/' + hotelId;
}

public getAll() {
  return this.http.get(this.getRootUrl());
}

public getOne(hotelId: any) {
  return this.http.get(this.formatUrl(hotelId));
}

public deleteOne(hotelId: any) {
  return this.http.delete(this.formatUrl(hotelId));
}

public addOne(hotel: any) {
  return this.http.post(this.getRootUrl(), hotel);
}

public putOne(hotelId: any, hotel: any) {
  return this.http.put(this.formatUrl(hotelId), hotel);
}

public submit(hotel: any) {
  if (!hotel.id) {
    return this.addOne(hotel);
  }
  return this.putOne(hotel.id, hotel);
}
}

