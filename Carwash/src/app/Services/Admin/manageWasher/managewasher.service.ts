import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ManagewasherService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  /* Get all Washer */
  getAllWasher(): Observable<any> {
    return this.http.get(`${adminBaseURL}/admin/allwashers`);
  }

  /* Delete a Washer */
  deleteWasher(id:number) : Observable <any> {
    return this.http.delete(`${adminBaseURL}/admin/removewasher/${id}`)
  }
}