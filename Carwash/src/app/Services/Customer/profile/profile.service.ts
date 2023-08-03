import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /* get customer details  */
  getCustomer(): Observable<any>{
    return this.http.get(`${customerBaseURL}/customer/allcustomers/`);
  }
  
  /* get plans details  */
  getPlans(): Observable<any>{
    return this.http.get(`${customerBaseURL}/customer/allpacks/`);
  }

 
 /* get Customer By Email */
 getCustomerByEmail( email:String): Observable<any>{
  return this.http.get(`${customerBaseURL}/customer/CustomerByEmail/${email}`)
}
  

}