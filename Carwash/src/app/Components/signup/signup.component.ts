import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/Customer/auth/auth-service.service';
import { AuthService } from 'src/app/Services/Washer/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  selected= "Customer";
  nameError=''; 
  idError ='';
  phoneError='';
  emailError ='';
  usernameError='';
  addressError ='';
  passwordError ='';
  showMessage = false;
  succcessMsg = 'Thanks for registration! You will notified via mail after the admin approval.';

  constructor(private router : Router, private _auth: AuthServiceService, private _washerAuth : AuthService) { }

  ngOnInit(): void {
    this.showMessage= false;
  }

  /* Show and hide password */
  showpass(x:any,text:any)
  {
    if (x.type === "password") {
      x.type = "text";
      text.text = "Hide"
    } else {
      text.text ="Show";
      x.type = "password";
    }
  }

  /* Register the user */
  register(customer:any)
  {
    this.emailError= ''; this.passwordError='';
    if(customer.value.role == 'Customer'){
      let user = {id: customer.value.id, name: customer.value.name, phone:customer.value.phone, email: customer.value.email, address:customer.value.address, password : customer.value.password};
      this._auth.registerCustomer(user)
      .subscribe(
        res => {
          localStorage.setItem('customer',res)
          this.router.navigateByUrl('/signup')
          alert("Successful register!"  )
        },
        err => {{this.idError =err.error.id, this.nameError =err.error.name, this.phoneError =err.error.phone, this.emailError =err.error.email, this.addressError =err.error.address, this.passwordError = err.error.password}
        alert("Invalid Something is Missing!");}
      )
    }

    if(customer.value.role == 'Washer'){
      let user = {id: customer.value.id, name: customer.value.name, phone:customer.value.phone, email: customer.value.email, address:customer.value.address, password : customer.value.password};
      this._washerAuth.registerWasher(user)
      .subscribe(
        res => {
          localStorage.setItem('washer',res.token)
          this.router.navigate(['/washerDashboard/washerHome'])
          alert('Thanks for registration!')

          customer.reset();
          this.showMessage = true;
        },
        err => {
          this.idError =err.error.id;
          this.nameError =err.error.name;
          this.emailError =err.error.email; 
          this.addressError =err.error.address;
          this.passwordError = err.error.password;
          console.log(err);
        }
      )
    }

    
     
  } 


}