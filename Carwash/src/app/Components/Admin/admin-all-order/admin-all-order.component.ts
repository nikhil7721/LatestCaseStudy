import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageOrderService } from 'src/app/Services/Admin/manageOrder/manage-order.service';

@Component({
  selector: 'app-admin-all-order',
  templateUrl: './admin-all-order.component.html',
  styleUrls: ['./admin-all-order.component.css']
})
export class AdminAllOrderComponent implements OnInit {

  successMsg ='order has been removed!.'
  orderDetails=[] as any;
  constructor( private _orderdetails: ManageOrderService, private router: Router ) { }

  ngOnInit(): void {

    this.orderDetails =[] ;
    this._orderdetails.getAllOrder()
    .subscribe(
      res => this.orderDetails=res,
      err => console.log(err)
    )
  }

  /* Delete a order */
  deleteOrder(id :number){
    this._orderdetails.deleteOrder(id)
      .subscribe(
        res =>{ 
          this.ngOnInit()
          alert(this.successMsg)
        },
        err => console.log(err)
      )
  }

}