
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { loginDataAdmin } from 'src/app/model/loginAdmin';
import { adminBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  public loginStatusSubject = new Subject<Boolean>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http : HttpClient, private router: Router) { }

  public loginAdmin(token: any){
    localStorage.setItem("token",token);
    // this.loginStatusSubject.next(true);
    return true;
  }

  public logoutAdmin(){
    localStorage.removeItem('token');
    localStorage.removeItem('atoken');
    localStorage.removeItem('admin');
    window.location.reload();
    // return true;
  }


  public isLoggedInAdmin(){
    let tokenStr = localStorage.getItem('atoken');
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


  public generateTokenAdmin(admin: loginDataAdmin){
    return this.http.post(`${adminBaseURL}/admin/authenticate`,admin);
   
   }

   public getCurrentAdmin(){
    return this.http.get(`${adminBaseURL}/admin/current-user`);
  }

  public setUser(admin:any){
    localStorage.setItem('admin',JSON.stringify(admin));
  }
  
  public getUser(){
    let userStr = localStorage.getItem("admin");
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logoutAdmin();
      return null;
    }
  }

  public loginUser(token: any){
    localStorage.setItem("token",token);
    localStorage.setItem("atoken",token);
    // this.loginStatusSubject.next(true);
    return true;
  }

  public getUserRole(){
    let admin = this.getUser()
    return admin.authorities[0].authority;
  }


  /* get Washer By Email */
  getAdminByEmail( aEmail:String): Observable<any>{
    return this.http.get(`${adminBaseURL}/admin/AdminByEmail/${aEmail}`)
  }
}