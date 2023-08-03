import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from 'src/app/Services/Admin/auth/admin-auth.service';
import { AuthServiceService } from 'src/app/Services/Customer/auth/auth-service.service';
import { AuthService } from 'src/app/Services/Washer/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedInCustomer=false;
  isLoggedInWasher=false;
  isLoggedInAdmin=false;
     
  constructor(private router : Router, public  _auth : AuthServiceService, public _washerauth: AuthService, public _adminauth: AdminAuthService) { }

  ngOnInit(): void {
    this.isLoggedInCustomer = this._auth.isLoggedInCustomer();
    this._auth.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedInCustomer = this._auth.isLoggedInCustomer();
    });

    this.isLoggedInWasher = this._washerauth.isLoggedInWasher();
    this._washerauth.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedInWasher = this._washerauth.isLoggedInWasher();
    });

    
    this.isLoggedInAdmin = this._adminauth.isLoggedInAdmin();
    this._adminauth.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedInAdmin = this._adminauth.isLoggedInAdmin();
    });
   
  }

}