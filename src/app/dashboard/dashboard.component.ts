import { Component, Input } from '@angular/core';
import{NgModel} from '@angular/forms';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() userID: string;

 
  collection: string[];

  constructor() {
    this.collection = ['Krishna', 'Lokesh', 'Tinku'];
    this.userID = "";
  }

}
