import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { SignupComponent } from './signup/signup.component';
import {AuthGuard} from './auth.guard';
import {LoginAuthService} from './login-auth.service';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { UserService } from './user.service'
import { HttpClientModule } from '@angular/common/http';
import { JwtInterceptor} from './jwt-interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginsuccesComponent } from './loginsucces/loginsucces.component';
import { ReportdetailComponent } from './reportdetail/reportdetail.component';
import { RouterModule } from '@angular/router';
import { AddReportComponent } from './add-report/add-report.component';
import { UpdatereportComponent } from './updatereport/updatereport.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmindashboardComponent,
    HomeComponent,
    LoginComponent,
    UserdashboardComponent,
    SignupComponent,
    HeaderComponent,
    LoginsuccesComponent,
    ReportdetailComponent,
    AddReportComponent,
    UpdatereportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AuthGuard,
    LoginAuthService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
