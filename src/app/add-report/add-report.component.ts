import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { Router, ActivatedRoute } from '@angular/router';
import { Report } from '../report.service';
import {LoginAuthService} from '../login-auth.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})
export class AddReportComponent implements OnInit {
  id: number;
editreport: Group;
public loginUser: any = {};
  constructor(private _service :Report, private _router : ActivatedRoute, private _run :Router, private authService: LoginAuthService) { 
    this.authService.isLoggedIn();
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
    this.editreport = new Group();
  }

  updateReport() {
    this._service.createReport(this.editreport)
      .subscribe(data => console.log(data), error => console.log(error));
    this.editreport= new Group();
    
  }

  onSubmit() {
    this.updateReport();  
    this._run.navigate(['/loginsucces']);  
  }
  gotoList() {
    this._run.navigate(['/loginsucces']);
  }
 
}

