import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import {LoginAuthService} from '../login-auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public user: any = {};

  constructor(private userService: UserService, private authService:LoginAuthService, private _run :Router) {
    this.authService.isLoggedIn();
    this.authService.isDisabled();
   }

  ngOnInit(): void {
  }
  
  saveUser(user:any, userForm: any){
    user.enabled = true;
    this.userService.save(user).subscribe((response)=> {
      if(response){
        console.log(response);
        userForm.reset();
      }
    })
    this._run.navigate(['/loginsucces']);
  }
  gotoList() {
    this._run.navigate(['/loginsucces']);
  }
}
