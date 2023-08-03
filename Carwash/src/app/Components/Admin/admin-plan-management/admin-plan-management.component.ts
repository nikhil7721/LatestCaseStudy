import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanManagementService } from 'src/app/Services/Admin/planManagement/plan-management.service';

@Component({
  selector: 'app-admin-plan-management',
  templateUrl: './admin-plan-management.component.html',
  styleUrls: ['./admin-plan-management.component.css']
})
export class AdminPlanManagementComponent implements OnInit {

  plans= [] as any;

  constructor(private router : Router, private _planService : PlanManagementService) { }

  ngOnInit(): void {
    this.plans =[];
    this._planService.getPlans()
      .subscribe(
        res => this.plans.push(res),
        err => console.log(err)
      )
  }

  /* Delete a plan */
  deletePlan(id :number){
    this._planService.deleteService(id)
      .subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
      )
  }

  deletecon(){
    alert("Wash Pack deleted Successfully")
  }

}