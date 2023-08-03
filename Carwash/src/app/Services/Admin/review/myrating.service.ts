import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyratingService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

   /* Get all Rating */
   getAllRating(): Observable<any> {
    return this.http.get(`${adminBaseURL}/admin/allratings`);
  }

  /* Delete a rating */
  deleteRating(id:number) : Observable <any> {
    return this.http.delete(`${adminBaseURL}/admin/deleterating/${id}`)
  }
}