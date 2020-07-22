import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpHeaders } from '@angular/common/http';
import {LoginAuthService} from './login-auth.service';
import { Observable } from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';
@Injectable({
  providedIn: 'root'
})


export class JwtInterceptor implements HttpInterceptor {

    
    
    
    constructor(private token: LoginAuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.token.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}