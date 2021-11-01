import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register-form',
  templateUrl: './login-register-form.component.html',
  styleUrls: ['./login-register-form.component.css']
})
export class LoginRegisterFormComponent implements OnInit {

  new:boolean=true;
  existing:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  existingUser(){
    this.existing=true;
    this.new=false;
  }

  newUser(){
    this.new=true;
    this.existing=false;
  }

}
