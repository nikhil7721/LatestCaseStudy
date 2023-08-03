import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { washerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient,  private router: Router) { }

   /* Get all Rating */
   getAllRating(): Observable<any> {
    return this.http.get(`${washerBaseURL}/washer/allratings`);
  }
}