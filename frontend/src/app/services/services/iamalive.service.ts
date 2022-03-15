import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface IReport{
  id: number;
  mobile: string;
  ip: string;
  country: string;
  comment : string;
  seen : string;
  location : string
}

export interface INotification{
  id: number;
  mobile: string;
  ip: string;
  country: string;
  email : string
  hashedEmail?: string
}

@Injectable({
  providedIn: 'root'
})
export class IamaliveService {

  constructor(
    private httpClient: HttpClient
  ) { }

  search(data: Pick<IReport, 'mobile'>) {
    return this.httpClient.post(`${environment.API}search`, {
      ...data
    })
  }
  report(data: IReport) {
    return this.httpClient.post(`${environment.API}report`, {
      ...data
    })
  }
  subscribe(data: INotification) {
    return this.httpClient.post(`${environment.API}subscribe`, {
      ...data
    })
  }
  unsubscribe(data: Pick<INotification, 'hashedEmail'>) {
    return this.httpClient.post(`${environment.API}unsubscribe`, {
      ...data
    })
  }
}
