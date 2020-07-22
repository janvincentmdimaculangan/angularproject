import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { Router, ActivatedRoute } from '@angular/router';
import { Report } from '../report.service';
import { Observable } from 'rxjs';
import {LoginAuthService} from '../login-auth.service';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-loginsucces',
  templateUrl: './loginsucces.component.html',
  styleUrls: ['./loginsucces.component.css']
})

export class LoginsuccesComponent implements OnInit {
  groups:Group[];
  
  public loginUser: any = {};

    constructor(private _service :Report, private _router : ActivatedRoute, private _run :Router, private authService: LoginAuthService) {
    this.authService.isLoggedIn();
    this.loginUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit()  {
     this.viewEntity();
    
    }
  
    viewEntity(){
      this._service.getEntity().subscribe(groups =>{
        this.groups =groups;
      }, err => {console.log(err);
       })
    }
       
     
     deleteReport(id: number){
       this._service.remove(id)
       .subscribe(
         data =>{
           console.log(data);
           this.viewEntity();
         }, error =>console.log(error));
         
       
     }
   /*  gotoregistration(){
      this._run.navigate(['/newreport'])
    }*/
  
  
  }
  