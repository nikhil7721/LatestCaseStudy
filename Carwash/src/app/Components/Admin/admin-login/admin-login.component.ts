import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { loginDataAdmin } from 'src/app/model/loginAdmin';
import { AdminAuthService } from 'src/app/Services/Admin/auth/admin-auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  emailError ='';
  passwordError ='';
  oPassword ='';

  details=[] as any;

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

  logindataAdmin : loginDataAdmin = new loginDataAdmin();

  constructor(private router: Router, private loginAdmin: AdminAuthService,private form:FormBuilder) { }


  ngOnInit(): void {
    this.loginForm = this.form.group({
      username : ['',Validators.required,Validators.minLength(3)],
      password : [''],
    })
  }

  
  formSubmit(){
    console.log(this.logindataAdmin);
 
    if(this.logindataAdmin.username.trim()=='' || this.logindataAdmin.username==null)
    {
      alert("Username is required !!!");
      return;
    }
    if(this.logindataAdmin.password.trim()=='' || this.logindataAdmin.password==null)
    {
      alert("Password is required !!!");
      return;
    }
    this.loginAdmin.generateTokenAdmin(this.logindataAdmin).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

        this.loginAdmin.loginUser(data.token);

        //CurrentUser
        this.loginAdmin.getCurrentAdmin().subscribe(
          (user:any) => {
            this.loginAdmin.setUser(user);
            console.log(user);
   
           if(this.loginAdmin.getUserRole()=="Admin")
            {
              // window.location.href = '/user'
              this.router.navigateByUrl('/adminDashboard/adminHome');
              this.loginAdmin.loginStatusSubject.next(true);
            }
            else{
              this.loginAdmin.logoutAdmin();
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