import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { washerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyOrderService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private http : HttpClient) { }

  /* Get all Order */
  getAllOrder(): Observable<any> {
    return this.http.get(`${washerBaseURL}/washer/allorders`);
  }
}