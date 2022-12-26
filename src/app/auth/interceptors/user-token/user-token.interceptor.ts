import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service/auth.service'; 
import { Router } from '@angular/router';
import {tap} from 'rxjs/operators';

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //Request Add UserToken JWT
    if(this.authService.isLogged())  {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: this.authService.userToken
        }
     })
    }

    return next.handle(request).pipe((tap((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status !== 401){
          return;
        }
        this.router.navigate(['/login'])
      }
    })));
  }
}
