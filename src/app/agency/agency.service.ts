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

  private formatUrl(agencyId: any) {
    return this.getRootUrl() + '/' + agencyId;
  }

  public getAll() {
    return this.http.get(this.getRootUrl());
  }

  public getOne(agencyId: any) {
    return this.http.get(this.formatUrl(agencyId));
  }

  public deleteOne(agencyId: any) {
    return this.http.delete(this.formatUrl(agencyId));
  }

  public addOne(agency: any) {
    return this.http.post(this.getRootUrl(), agency);
  }

  public putOne(agencyId: any, agency: any) {
    return this.http.put(this.formatUrl(agencyId), agency);
  }

  public submit(agency: any) {
    if (!agency.id) {
      return this.addOne(agency);
    }
    return this.putOne(agency.id, agency);
  }
}
