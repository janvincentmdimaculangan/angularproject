import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
user=User;
private baseUrl= "http://localhost:8080";
  constructor(private http: HttpClient) {
    this.http =http;
   }


   getAllUsers(): Observable<any>{
   
    return this.http.get<User>("http://localhost:8080/users");
   }
    save(user:any): Observable<any>{
    
      return this.http.post("http://localhost:8080/registration",user);
 
  }
  getUser(token:any): Observable<any>{
    const headers = new HttpHeaders({'Authorization': 'Bearer '+token})
    return this.http.get("http://localhost:8080/getuser",{headers: headers});


  }
  remove(bookId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/userdelete/${bookId}`);
  }

}
















