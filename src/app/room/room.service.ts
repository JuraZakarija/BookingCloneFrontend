import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private http: HttpClient
  ) { }

private readonly ROOMS_URL = 'rooms';

public getAll() {
  return this.http.get(environment.apiUrl + this.ROOMS_URL);
  }


  public deleteOne(roomId) {
    return this.http.delete(environment.apiUrl + this.ROOMS_URL + '/' + roomId);
  }


  public getOne(roomId) {
    return this.http.get(environment.apiUrl + this.ROOMS_URL + '/' + roomId);
  }
}
