import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagecustomerService } from 'src/app/Services/Admin/manageCustomer/managecustomer.service';

@Component({
  selector: 'app-admin-allcustomer',
  templateUrl: './admin-allcustomer.component.html',
  styleUrls: ['./admin-allcustomer.component.css']
})
export class AdminAllcustomerComponent implements OnInit {

  details=[] as any;
  constructor(private _customerdetails: ManagecustomerService, private router : Router) { }

  ngOnInit(): void {
    this.details =[] ;
    this._customerdetails.getAllCustomer()
    .subscribe(
      res => this.details=res,
      err => console.log(err)
    )
  }

  /* Delete a customer */
  deleteCustomer(id :number){
    this._customerdetails.deleteCustomer(id)
      .subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
      )
  }

  confirm(){
    alert("Customer Removed Successfully!")
  }

}