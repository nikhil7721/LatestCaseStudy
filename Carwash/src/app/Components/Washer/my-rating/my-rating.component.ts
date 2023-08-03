import { Component, OnInit } from '@angular/core';
import { RatingsService } from 'src/app/Services/Washer/review/ratings.service';

@Component({
  selector: 'app-my-rating',
  templateUrl: './my-rating.component.html',
  styleUrls: ['./my-rating.component.css']
})
export class MyRatingComponent implements OnInit {

  details=[] as any;

  constructor(private _ratingdetails: RatingsService) { }

  ngOnInit(): void {
    this.details =[] ;
    this._ratingdetails.getAllRating()
    .subscribe(
      res => this.details=res,
      err => console.log(err)
    )
  }

}