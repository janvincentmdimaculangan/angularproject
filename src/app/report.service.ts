import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient , HttpHeaders, HttpErrorResponse, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class Report {
 private baseUrl= "http://localhost:8080";
 //private baseUrl=AuthenticationService.



  constructor(private http : HttpClient) { 

  }
 
  public getEntity(): Observable<any>{
    return this.http.get(`http://localhost:8080/report`);  //  return this.http.get<Entity>(`${this.baseUrl}`);
  }
  get(bookId: number): Observable<Group> {
    const bookDetailsUrl = `${this.baseUrl}/report/${bookId}`;
    return this.http.get<Group>(bookDetailsUrl);
  }
 remove(bookId: number): Observable<any>{
   return this.http.delete(`${this.baseUrl}/delete/${bookId}`);

 }
updateReport(id: number, value: any): Observable<Object> {
  return this.http.put(`${this.baseUrl}/edit/${id}`, value);
}
createReport(report: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}/add`, report);
}
  }
