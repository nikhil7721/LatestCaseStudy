import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/Services/Customer/order/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  showMsg!: boolean;
  successMsg ='Your Wash has been booked.'
  constructor(private _orderService : OrderService, private _router :Router) { }

  ngOnInit(): void {
    this.showMsg = false;
  }

    /* Show total of order */
    submitOrder(data:any){
    
      /* Constructing the order object from details */
      const orderDetails = {
        orderId : data.value.orderId,
        carName : data.value.carName,
        carModel : data.value.carModel,
        wName : data.value.wName,
        date : data.value.date,
        phoneNo : data.value.phoneNo
        
      }  
  
  
      this._orderService.createOrder(orderDetails)
        .subscribe(
          res => {
            console.log(res)
            alert(this.successMsg);
            this.showMsg = true;
          },
          err => console.log(err)
        )
      data.reset();
      
      
    }
  
    /* Create a new Order */
    createOrder(details:any){
      console.log(details);
    }

    confirmation(){
      alert(this.successMsg)
    }
}