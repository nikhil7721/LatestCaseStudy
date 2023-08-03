import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washerdashboard',
  templateUrl: './washerdashboard.component.html',
  styleUrls: ['./washerdashboard.component.css']
})
export class WasherdashboardComponent implements OnInit {

  status: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleClass(){
    this.status =!this.status;
  }
}