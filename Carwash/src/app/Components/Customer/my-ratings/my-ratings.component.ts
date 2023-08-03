import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RatingService } from 'src/app/Services/Customer/review/rating.service';

@Component({
  selector: 'app-my-ratings',
  templateUrl: './my-ratings.component.html',
  styleUrls: ['./my-ratings.component.css']
})
export class MyRatingsComponent implements OnInit {

  showMsg!: boolean;
  successMsg ='Your Rating has Submit.'
  constructor( private _ratingService : RatingService, private _router :Router) { }

  ngOnInit(): void {
    this.showMsg = false;
  }

  /* Show total of rating */
    submitRating(data:any){
    
      /* Constructing the order object from details */
      const ratingDetails = {
        washerId : data.value.washerId,
        status : data.value.status,
        rating : data.value.rating,
        review : data.value.review
      } 
      
      this._ratingService.createRating(ratingDetails)
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
  createRating(details:any){
    console.log(details);
  }
}