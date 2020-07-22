import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from '../login-auth.service';
import {UserService} from '../user.service';


@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  public loginUser: any = {};
  public user: any ={};

  constructor(private authService: LoginAuthService,  private userService: UserService) {
    this.authService.isLoggedIn();
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.userService.getUser(this.loginUser.token).subscribe(user =>{
      this.user =user;
    }, err => {console.log(err);
    })
 }
  

}
