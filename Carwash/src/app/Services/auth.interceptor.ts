import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AdminAuthService } from "./Admin/auth/admin-auth.service";
import { AuthServiceService } from "./Customer/auth/auth-service.service";


const TOKEN_HEADER = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{

    constructor(private login:AuthServiceService,private login1:AdminAuthService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        //add the jwt token (localstorage) request
       let authReq = req;
        const token = this.login.getToken();
        console.log("inside interceptor")
        if (token != null) {
            authReq = authReq.clone({setHeaders:
                { Authorization : `Bearer ${token}`} 
        });      
     }
     return next.handle(authReq);
    }  
    // intercept(req1: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //     //add the jwt token (localstorage) request
    //    let authReq1 = req1;
    //     const token = this.login1.getToken();
    //     console.log("inside interceptor")
    //     if (token != null) {
    //         authReq1 = authReq1.clone({setHeaders:
    //             { Authorization : `Bearer ${token}`} 
    //     });      
    //  }
    //  return next.handle(authReq1);
    // }  
}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    },
];