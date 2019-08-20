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

private getRootUrl() {
  return environment.apiUrl + this.ROOMS_URL;
}

private formatUrl(roomId: any) {
  return this.getRootUrl() + '/' + roomId;
}

public getAll(raw: any) {
  Object.keys(raw).forEach((key) => (raw[key] == null) && delete raw[key]);

  return this.http.get(this.getRootUrl(), {
    params: raw
  });
}

public getByHotel(hotelId: any) {
  return this.http.get(this.getRootUrl() + '?hotelId=' + hotelId);
}

public getOne(roomId: any) {
  return this.http.get(this.formatUrl(roomId));
}

public deleteOne(roomId: any) {
  return this.http.delete(this.formatUrl(roomId));
}

public addOne(room: any) {
  return this.http.post(this.getRootUrl(), room);
}

public putOne(roomId: any, room: any) {
  return this.http.put(this.formatUrl(roomId), room);
}

public submit(room: any) {
  if (!room.id) {
    return this.addOne(room);
  }
  return this.putOne(room.id, room);
}
}
