import { Component, OnInit } from '@angular/core';
import {LoginAuthService} from '../login-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentrole: any;
  public currentstatus: any;
  constructor(private authService: LoginAuthService, private router: Router){
    this.currentstatus = this.authService.getStatus().subscribe(currentstatus =>  {
      this.currentstatus = currentstatus;
    });
    this.currentrole = this.authService.isDisabled();
  }
logout(){
  localStorage.removeItem('currentUser');
  this.router.navigate(['/login']);

}
  ngOnInit() {
  }

}
