import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor(
    private http: HttpClient
  ) { }

private readonly GUESTS_URL = 'guests';

public getAll() {
  return this.http.get(environment.apiUrl + this.GUESTS_URL);
  }

  public deleteOne(guestId) {
    return this.http.delete(environment.apiUrl + this.GUESTS_URL + '/' + guestId);
  }


  public getOne(guestId) {
    return this.http.get(environment.apiUrl + this.GUESTS_URL + '/' + guestId);
  }
}
