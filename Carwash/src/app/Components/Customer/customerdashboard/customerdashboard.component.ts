import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  status: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  
  toggleClass(){
    this.status =!this.status;
  }
}