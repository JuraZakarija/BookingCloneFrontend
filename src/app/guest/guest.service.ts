import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelper } from '../auth/jwt.helper';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(
    private http: HttpClient,
    private jwt: JwtHelper
  ) { }

private readonly GUESTS_URL = 'users';

private getRootUrl() {
  return environment.apiUrl + this.GUESTS_URL;
}

private formatUrl(guestId: any) {
  return this.getRootUrl() + '/' + guestId;
}

public getAll() {
  return this.http.get(this.getRootUrl());
}

public getOne(guestId: any) {
  return this.http.get(this.formatUrl(guestId));
}

public deleteOne(guestId: any) {
  return this.http.delete(this.formatUrl(guestId));
}

public addOne(guest: any) {
  return this.http.post(this.getRootUrl(), guest);
}

public putOne(guestId: any, guest: any) {
  return this.http.put(this.formatUrl(guestId), guest);
}

public submit(guest: any) {
  if (!guest.id) {
    return this.addOne(guest);
  }
  return this.putOne(guest.id, guest);
}
}
