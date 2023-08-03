import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { loginDataCustomer } from 'src/app/model/login';
import { customerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  public loginStatusSubject = new Subject<Boolean>();
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http : HttpClient, private router : Router) { }

  /* Register a customer */
  registerCustomer(user: any): Observable<any>{
    return this.http.post(`${customerBaseURL}/customer/addcustomer`,user, this.httpOptions );
  }
  

  public loginCustomer(token: any){
    localStorage.setItem("token",token);
    // this.loginStatusSubject.next(true);
    return true;
  }

  public logoutCustomer(){
    localStorage.removeItem('token');
    localStorage.removeItem('ctoken');
    localStorage.removeItem('customer');
    window.location.reload();
    // return true;
  }

  public isLoggedInCustomer(){
    let tokenStr = localStorage.getItem('ctoken');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }
    else{
      return true;
    }
  }

  public getToken(){
    return localStorage.getItem("token");
  }

  public generateTokenCustomer(login: loginDataCustomer){
    return this.http.post(`${customerBaseURL}/customer/authenticate`,login);
   
   }

   public getCurrentCustomer(){
    return this.http.get(`${customerBaseURL}/customer/current-user`);
  }

  public setUser(customer:any){
    localStorage.setItem('customer',JSON.stringify(customer));
  }

  public getUser(){
    let userStr = localStorage.getItem("customer");
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logoutCustomer();
      return null;
    }
  }

  
  public loginUser(token: any){
    localStorage.setItem("token",token);
    localStorage.setItem("ctoken",token);
    // this.loginStatusSubject.next(true);
    return true;
  }

  public getUserRole(){
    let customer = this.getUser()
    return customer.authorities[0].authority;
  }


  /* Login with google */
  googleLogin() : Observable<any>{
    return this.http.get(`${customerBaseURL}/google`);

  }
   
}