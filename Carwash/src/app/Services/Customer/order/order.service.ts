import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { customerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient,  private router: Router) { }

  /* Add a new order */
  createOrder(order:any): Observable<any> {
    return this.http.post(`${customerBaseURL}/customer/addorder`,  order, this.httpOptions);
  }

  /* Cancel a order */
  cancelOrder(id:any): Observable<any> {
    return this.http.put(`${customerBaseURL}/customer/order/${id}`, this.httpOptions);
  }
}