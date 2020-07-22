import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AuthGuard } from './auth.guard';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import{LoginsuccesComponent} from './loginsucces/loginsucces.component';
import {ReportdetailComponent} from './reportdetail/reportdetail.component';
import {UpdatereportComponent} from './updatereport/updatereport.component';
import {AddReportComponent} from './add-report/add-report.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admindasboard', component: AdmindashboardComponent, canActivate: [AuthGuard]},
  {path: 'userdasboard', component: UserdashboardComponent, canActivate: [AuthGuard]},
  {path: 'loginsucces', component: LoginsuccesComponent, canActivate: [AuthGuard]},
  {path: 'updatereport/:id', component:UpdatereportComponent, canActivate: [AuthGuard]},
  {path: 'details/:id', component:ReportdetailComponent, canActivate:[AuthGuard]},
  {path: 'add', component:AddReportComponent, canActivate:[AuthGuard]},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
