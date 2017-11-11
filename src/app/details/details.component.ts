import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

firstName: String;
lastName: String;
title: String;

  constructor() { }

  ngOnInit() {
    this.firstName = 'Srinivas';
    this.lastName = 'Raghavan';
  }
getDetails(fName, lName) {
  this.title = fName.value + ' ' + lName.value;
}
}
