import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanManagementService } from 'src/app/Services/Admin/planManagement/plan-management.service';

@Component({
  selector: 'app-admin-edit-plan',
  templateUrl: './admin-edit-plan.component.html',
  styleUrls: ['./admin-edit-plan.component.css']
})
export class AdminEditPlanComponent implements OnInit {

  id: any;
  plan=[] as any;
  showMsg!: boolean;
  nameError!: string;
  message ='Plan details upadated successfully';

  constructor(private _planService: PlanManagementService,  private route: ActivatedRoute, private location : Location) { }

  ngOnInit(): void {
    this.plan =[];
    this.showMsg = false;
    this.nameError ='';

    this.id = this.route.snapshot.paramMap.get('id');
    this._planService.getplan(this.id)
      .subscribe(
        res => {this.plan.push(res), console.log(res)
        },
        err => console.log(err)
      )
  }

  /* update the plan */
  updatePlan(data:any) {
    this.showMsg = false;
    this.nameError ='';
    this._planService.updateService(data.value,this.id)
      .subscribe(
        res => {
          this.ngOnInit(),
          this.showMsg = true
        },
        err => this.nameError = err.error.name
      )

  }

  updatecon(){
    alert(this.message)
  }

  cancel() {
    this.location.back();
  }
}