import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAuthService } from '../Services/Admin/auth/admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminguardGuard implements CanActivate {
  constructor(private _aauthService: AdminAuthService,private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this._aauthService.isLoggedInAdmin() && this._aauthService.getUserRole() == 'Admin') 
      {
        return true;
      }
      this.router.navigateByUrl('adminlogin');
    return false;
  }
  
}
