import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { loginDataWasher } from 'src/app/model/loginWasher';
import { washerBaseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loginStatusSubject = new Subject<Boolean>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private http : HttpClient, private router : Router) { }

  /* Register a Washer */
  registerWasher(user:any) : Observable<any>{
    return this.http.post(`${washerBaseURL}/washer/addwasher`,user, this.httpOptions);
  }
  
  // /* Login a washer*/
  // loginWasher(user:any) : Observable<any>{
  //   return this.http.post(`${washerBaseURL}/washer/auth`,user, this.httpOptions )
  // }

  public loginWasher(token: any){
    localStorage.setItem("token",token);
    // this.loginStatusSubject.next(true);
    return true;
  }


  // /* Logout a washer */
  // logoutWasher(){
  //   localStorage.removeItem('washer');
  //   this.router.navigate(['/home']);
  // }

  public logoutWasher(){
    localStorage.removeItem('token');
    localStorage.removeItem('wtoken');
    localStorage.removeItem('washer');
    window.location.reload();
    // return true;
  }

  // /* Check if token exists */
  // loggedIn(){
  //   return !!localStorage.getItem('washer')
  // }

  public isLoggedInWasher(){
    let tokenStr = localStorage.getItem('wtoken');
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

  // /* Fetch Token */
  // getToken(){ 
  //   return localStorage.getItem('washer')
  // }

  public generateTokenWasher(login: loginDataWasher){

    return this.http.post(`${washerBaseURL}/washer/authenticate`,login);
   
   }

   public getCurrentWasher(){
    return this.http.get(`${washerBaseURL}/washer/current-user`);
  }

  public setUser(washer:any){
    localStorage.setItem('washer',JSON.stringify(washer));
  }

  public getUser(){
    let userStr = localStorage.getItem("washer");
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logoutWasher();
      return null;
    }
  }

  public loginUser(token: any){
    localStorage.setItem("token",token);
    localStorage.setItem("wtoken",token);
    return true;
  }

  public getUserRole(){
    let customer = this.getUser()
    return customer.authorities[0].authority;
  }
  
   /* get Washer By Email */
   getWasherByEmail( email:String): Observable<any>{
    return this.http.get(`${washerBaseURL}/washer/WasherByEmail/${email}`)
  }
}