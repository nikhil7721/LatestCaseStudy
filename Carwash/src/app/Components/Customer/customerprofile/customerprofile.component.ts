import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/Services/Customer/profile/profile.service';
import { PlansService } from 'src/app/Services/plans/plans.service';

@Component({
  selector: 'app-customerprofile',
  templateUrl: './customerprofile.component.html',
  styleUrls: ['./customerprofile.component.css']
})
export class CustomerprofileComponent implements OnInit {

  plans=[] as any;

  
  constructor(private _planService : ProfileService, private router : Router) { }
  
  ngOnInit(): void {
    this.plans =[];
    this._planService.getPlans()
      .subscribe(
        res => this.plans.push(res),
        err => console.log(err)
      )
    
  }


}