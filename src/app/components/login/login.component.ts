import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    age: '',
    bloodgroup: '',
    city: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    userNsme: '',
    password: ''
  };
  constructor() {

  }
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  onSignUp() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUPUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      age: '',
      bloodgroup: '',
      City: '',
      email: '',
      password: ''
    };
  }
  onLogin() {
    const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
    if (isUserExist != undefined) {
      alert('User logged in successfully');
    }
    else {
      alert('Invalid credentials');
    }
  }
}

