import { Component, OnInit } from '@angular/core';
import { PlansService } from 'src/app/Services/plans/plans.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services=[] as any;

  constructor(private _planService: PlansService) { }

  ngOnInit(): void {
    this._planService.services()
      .subscribe(
        res =>this.services = res,
        err => console.log(err)
      )
  }

}