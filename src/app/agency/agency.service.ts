import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(
    private http: HttpClient
  ) { }

private readonly AGENCIES_URL = 'agencies';

public getAll() {
  return this.http.get(environment.apiUrl + this.AGENCIES_URL);
  }

  public deleteOne(agencyId) {
    return this.http.delete(environment.apiUrl + this.AGENCIES_URL + '/' + agencyId);
  }


  public getOne(agencyId) {
    return this.http.get(environment.apiUrl + this.AGENCIES_URL + '/' + agencyId);
  }
}
