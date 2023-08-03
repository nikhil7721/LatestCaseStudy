import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagewasherService } from 'src/app/Services/Admin/manageWasher/managewasher.service';

@Component({
  selector: 'app-admin-all-washers',
  templateUrl: './admin-all-washers.component.html',
  styleUrls: ['./admin-all-washers.component.css']
})
export class AdminAllWashersComponent implements OnInit {

  details=[] as any;
  constructor( private _washerdetails: ManagewasherService, private router : Router) { }

  ngOnInit(): void {
    this.details =[] ;
    this._washerdetails.getAllWasher()
    .subscribe(
      res => this.details=res,
      err => console.log(err)
    )
  }

  
  /* Delete a customer */
  deleteWasher(id :number){
    this._washerdetails.deleteWasher(id)
      .subscribe(
        res => this.ngOnInit(),
        err => console.log(err)
      )
  }

  confirm(){
    alert("Washer Removed Successfully!")
  }

}