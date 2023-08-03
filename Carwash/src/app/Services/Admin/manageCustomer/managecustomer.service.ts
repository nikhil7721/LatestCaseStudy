import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagecustomerService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  /* Get all Customer */
  getAllCustomer(): Observable<any> {
    return this.http.get(`${adminBaseURL}/admin/allcustomers`);
  }

  /* Delete a Customer */
  deleteCustomer(id:number) : Observable <any> {
    return this.http.delete(`${adminBaseURL}/admin/removecustomer/${id}`)
  }
}