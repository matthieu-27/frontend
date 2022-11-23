import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service/auth.service'; 

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //Request Add UserToken JWT
    if(this.authService.isLogged())  {
      request = request.clone({
       setHeaders: {
        "Authorization": this.authService.userToken,
        "Content-Type": 'application/json'
       }
     })
    }
    // Vérifier si 401 dans le next
    // Si 401 => rediriger vers login
    // sinon continue

    return next.handle(request).pipe();
  }
}
