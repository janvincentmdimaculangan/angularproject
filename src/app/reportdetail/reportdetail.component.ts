import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { Router, ActivatedRoute } from '@angular/router';
import { Report } from '../report.service';

@Component({
  selector: 'app-reportdetail',
  templateUrl: './reportdetail.component.html',
  styleUrls: ['./reportdetail.component.css']
})
export class ReportdetailComponent implements OnInit {
  groups: Group;
  id : number;


  constructor(private _service :Report, private _router : ActivatedRoute, private _run :Router) { }

  
  ngOnInit() {
    this._router.paramMap.subscribe(
      () => {
        this.getViewInfo();
      }
    )
  }

  getViewInfo(){
    const id: number = +this._router.snapshot.paramMap.get('id');

    this._service.get(id).subscribe(
      data => {
        this.groups = data;
      }
    );
  }
  gotoview(){
    this._run.navigate(['/loginsucces']);
  
  }
  gotoupdate(id: number){
    this._run.navigate(['/updatereport',id]);
  
  }
}