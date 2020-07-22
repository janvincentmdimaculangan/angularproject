import { Component, OnInit } from '@angular/core';
import { Group } from '../group';
import { Router, ActivatedRoute } from '@angular/router';
import { Report } from '../report.service';


@Component({
  selector: 'app-updatereport',
  templateUrl: './updatereport.component.html',
  styleUrls: ['./updatereport.component.css']
})
export class UpdatereportComponent implements OnInit {
  id: number;
editreport: Group;

  constructor(private _service :Report, private _router : ActivatedRoute, private _run :Router) { }

  ngOnInit() {
    this.editreport = new Group();

    this.id = this._router.snapshot.params['id'];
    
    this._service.get(this.id)
      .subscribe(data => {
        console.log(data)
        this.editreport = data;
      }, error => console.log(error));
  }

  updateReport() {
    this._service.updateReport(this.id, this.editreport)
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
