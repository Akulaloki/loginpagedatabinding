import { Component, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userID: string;
  password: string;
  @Output() loginSuccess: EventEmitter<{ userID: string }> = new EventEmitter<{ userID: string }>();


  constructor(private route:Router) {

    this.userID = '';
    this.password = '';

  }

  login() {
    if (this.userID && this.password) {
      this.loginSuccess.emit({ userID: this.userID });
      this.route.navigate(['/dashboard']);

    } else {
      alert("Tried to Login");
    }
  }
}


