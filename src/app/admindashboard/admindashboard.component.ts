import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from '../login-auth.service';
import {UserService} from '../user.service';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
public loginUser: any = {};
public users: any =[];
  constructor(private authService: LoginAuthService, private userService: UserService) {
    this.authService.isLoggedIn();
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
   this.viewentity();
  }
  
  viewentity() {
    this.userService.getAllUsers().subscribe(users =>{
      this.users =users;
    }, err => {console.log(err);
     })
  }
  
  
  
  
  deleteReport(id: number){
    this.userService.remove(id)
    .subscribe(
      data =>{
        console.log(data);
        this.viewentity();
      }, error =>console.log(error));
      
    
  }
  
}
