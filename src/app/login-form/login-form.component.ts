import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

   username: string;
   password: string;
  constructor(private router: Router, private user: UserService) { }

  ngOnInit() {

  }
  loginUser(){
      if(this.username=='admin'&& this.password=='admin'){
        this.user.setUserLoggedIn();
        this.router.navigate(['dashboard']);
      }
  }

}
