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

  private getRootUrl() {
    return environment.apiUrl + this.AGENCIES_URL;
  }

  private formatUrl(agencyId) {
    return this.getRootUrl() + '/' + agencyId;
  }

  public getAll() {
    return this.http.get(this.getRootUrl());
  }

  public getOne(agencyId) {
    return this.http.get(this.formatUrl(agencyId));
  }

  public deleteOne(agencyId) {
    return this.http.delete(this.formatUrl(agencyId));
  }

  public addOne(agency) {
    return this.http.post(this.getRootUrl(), agency);
  }

  public putOne(agencyId, agency) {
    return this.http.put(this.formatUrl(agencyId), agency);
  }

  public submit(agency) {
    if (!agency.id) {
      return this.addOne(agency);
    }
    return this.putOne(agency.id, agency);
  }
}
