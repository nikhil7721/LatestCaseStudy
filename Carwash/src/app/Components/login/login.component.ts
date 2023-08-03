import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { loginDataCustomer } from 'src/app/model/login';
import { loginDataWasher } from 'src/app/model/loginWasher';
import { AuthServiceService } from 'src/app/Services/Customer/auth/auth-service.service';
import { ProfileService } from 'src/app/Services/Customer/profile/profile.service';
import { AuthService } from 'src/app/Services/Washer/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  selected="Customer";
  emailError ='';
  passwordError ='';
  msg =' Have Successfully Logged in!';
  oPassword ='';

  details=[] as any;

  /* Show and hide password */
  showpass(x:any,text:any){
    if (x.type === "password") {
      x.type = "text";
      text.text = "Hide"
    } else {
      text.text ="Show";
      x.type = "password";
    }
 }

  loginForm! : FormGroup;

  logindataCustomer : loginDataCustomer = new loginDataCustomer();
  logindataWasher : loginDataWasher = new loginDataWasher();

  constructor(private loginCustomer:AuthServiceService,private router:Router,private form:FormBuilder,
              private  loginWasher: AuthService) { }
 


  ngOnInit(): void {
    this.loginForm = this.form.group({
      username : ['',Validators.required,Validators.minLength(3)],
      password : [''],
    })
  }

  
  formSubmit(){
    console.log(this.logindataCustomer);
    console.log(this.selected);
    if(this.selected=="Customer"){
    if(this.logindataCustomer.username.trim()=='' || this.logindataCustomer.username==null)
    {
      alert("Username is required !!!");
      return;
    }
    if(this.logindataCustomer.password.trim()=='' || this.logindataCustomer.password==null)
    {
      alert("Password is required !!!");
      return;
    }
    this.loginCustomer.generateTokenCustomer(this.logindataCustomer).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

        this.loginCustomer.loginUser(data.token);

        //CurrentUser
        this.loginCustomer.getCurrentCustomer().subscribe(
          (user:any) => {
            this.loginCustomer.setUser(user);
            console.log(user);
   
           if(this.loginCustomer.getUserRole()=="Customer")
            {
              // window.location.href = '/user'
              this.router.navigateByUrl('/user/customerHome');
              this.loginCustomer.loginStatusSubject.next(true);
            }
            else{
              this.loginCustomer.logoutCustomer();
            }
          } 
        )
      },
      (error: any)=>{
        console.log("error");
        console.log(error);
        alert("Invalid Credentials !! Try Again")
      }
    )

    }else{
    if(this.logindataCustomer.username.trim()=='' || this.logindataCustomer.username==null)
    {
      alert("Username is required !!!");
      return;
    }
    if(this.logindataCustomer.password.trim()=='' || this.logindataCustomer.password==null)
    {
      alert("Password is required !!!");
      return;
    }
    this.loginWasher.generateTokenWasher(this.logindataCustomer).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

        this.loginWasher.loginUser(data.token);

        //CurrentUser
        this.loginWasher.getCurrentWasher().subscribe(
          (user:any) => {
            this.loginWasher.setUser(user);
            console.log(user);

            if(this.loginWasher.getUserRole()=="Washer")
            {
              // window.location.href = '/user'
              this.router.navigateByUrl('/washerDashboard/washerHome');
              this.loginWasher.loginStatusSubject.next(true);
            }
            else{
              this.loginCustomer.logoutCustomer();
            }
          } 
        )
      },
      (error: any)=>{
        console.log("error");
        console.log(error);
        alert("Invalid Credentials !! Try Again")
      }
    )
    }
      }   
    }
  
  
  // /* Login with Google */
  //  googleLogin(){
  //   this._auth.googleLogin()
  //     .subscribe(
  //       res=>console.log(res),
  //      err => console.log(err)
  //     )
  //   }

      
   
