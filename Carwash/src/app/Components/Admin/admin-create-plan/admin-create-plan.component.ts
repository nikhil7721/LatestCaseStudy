import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanManagementService } from 'src/app/Services/Admin/planManagement/plan-management.service';

@Component({
  selector: 'app-admin-create-plan',
  templateUrl: './admin-create-plan.component.html',
  styleUrls: ['./admin-create-plan.component.css']
})
export class AdminCreatePlanComponent implements OnInit {

  
  showMsg!: boolean;
  nameError='';
  message='Plan created Successfully';

  constructor(private _planService: PlanManagementService, private router: Router, private location : Location) { }

  ngOnInit(): void {
    this.nameError='';
    this.showMsg = false;
  }

  createPlan(data:any) {
    this.showMsg = false;
    this.nameError ='';
    this._planService.createService(data.value)
      .subscribe(
        res => {
          this.showMsg =true
        },
        err => {
          this.nameError = err.error.name;
        }
      )
    
  }
  confirmplan(){
    alert(this.message)
  }

  cancel(){
    this.location.back();
  }

}