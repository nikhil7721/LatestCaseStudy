import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { customerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient,  private router: Router) { }

  /* Add a new Rating */
  createRating(rating:any): Observable<any> {
    return this.http.post(`${customerBaseURL}/customer/addrating`, rating, this.httpOptions);
  }
}