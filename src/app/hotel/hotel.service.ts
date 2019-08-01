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

public getAll() {
  return this.http.get(environment.apiUrl + this.HOTELS_URL);
  }
}
