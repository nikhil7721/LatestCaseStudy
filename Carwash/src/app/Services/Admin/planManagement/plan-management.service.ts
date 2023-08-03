import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanManagementService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  /* Get a specific service */
  getplan(id:number) : Observable<any> {
    return this.http.get(`${adminBaseURL}/admin/allpacks/${id}`);
  }

  /* Get all services */
  getPlans(): Observable<any> {
    return this.http.get(`${adminBaseURL}/admin/allpacks`);
  }

  /* Create new Services */
  createService(data:any) : Observable < any> {
    return this.http.post(`${adminBaseURL}/admin/addpack`,data,this.httpOptions )
  }

  /* Update a service */
  updateService(data:any, id:number) : Observable <any> {
    return this.http.put(`${adminBaseURL}/admin/packupdate/${id}`,data,this.httpOptions )
  }

  /* Delete a service */
  deleteService(id:number) : Observable <any> {
    return this.http.delete(`${adminBaseURL}/admin/deletepack/${id}`)
  }
}