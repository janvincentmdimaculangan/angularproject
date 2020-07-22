import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private subject = new Subject<any>();
  constructor(private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.subject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  loginUser(user: any):Observable<any> {
      const headers= new HttpHeaders({'Access-Controll-Allow-Origin': '*'});
     return this.http.post<any>("http://localhost:8080/login",user, {headers:headers })
       /*   .pipe(map(user => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
              return user;
          }));*/
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      this.clearStatus();
  }

  isLoggedIn(){
    if (localStorage.getItem('currentUser')){
      this.subject.next({status: true});
 }else{
   this.subject.next({status:false});
 }

  }
clearStatus(){
  this.subject.next();
}
getStatus(): Observable<User>{
  return this.subject.asObservable();
}
isDisabled(): boolean {
  var userRole = localStorage.getItem(`currentUser`);
  if (userRole == `ADMIN`) {
    return true;
  } else {
    return false;
  }
}
}














