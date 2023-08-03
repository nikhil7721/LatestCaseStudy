import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyratingService } from 'src/app/Services/Admin/review/myrating.service';

@Component({
  selector: 'app-admin-all-review',
  templateUrl: './admin-all-review.component.html',
  styleUrls: ['./admin-all-review.component.css']
})
export class AdminAllReviewComponent implements OnInit {

  details=[] as any;

  constructor(private _ratingdetails: MyratingService, private router : Router ) { }

  ngOnInit(): void {
    this.details =[] ;
    this._ratingdetails.getAllRating()
    .subscribe(
      res => this.details=res,
      err => console.log(err)
    )

  }

  /* Delete a rating */
  deleteRating(id :number){
    this._ratingdetails.deleteRating(id)
      .subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
      )
  }

}