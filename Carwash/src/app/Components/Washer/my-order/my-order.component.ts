import { Component, OnInit } from '@angular/core';
import { ManageOrderService } from 'src/app/Services/Admin/manageOrder/manage-order.service';
import { MyOrderService } from 'src/app/Services/Washer/order/my-order.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit {

  orderDetails=[] as any;
  constructor(private _orderDetails: MyOrderService,private _orderdetails: ManageOrderService) { }

  ngOnInit(): void {
    this.orderDetails =[] ;
    this._orderDetails.getAllOrder()
    .subscribe(
      res => this.orderDetails=res,
      err => console.log(err)
    )
  }

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
  successMsg(successMsg: any) {
    throw new Error('order has been Completed..');
  }


}