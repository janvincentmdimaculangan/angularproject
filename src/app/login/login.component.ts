import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {LoginAuthService} from '../login-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any ={};

  constructor(private userService: UserService, private router: Router, private authService:LoginAuthService) {
    this.authService.isLoggedIn();
   }

  ngOnInit() {
  }
loginUser(user:any){
  this.authService.loginUser(user).subscribe((response)=> {
    if(response){
     if(response.token){
       localStorage.setItem('currentUser',JSON.stringify(response));
       if(response.user.role =='ADMIN'){

        this.router.navigate(['/loginsucces']);
       }else{
        this.router.navigate(['/loginsucces']);
       }
     }
    }
  })
}
}
