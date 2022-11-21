import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../../services/auth-service/auth.service';

@Injectable()
export class UserTokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    //Request Add UserToken JWT
    if(this.authService.isLogged())  {
      request = request.clone({
        setHeaders: {Authorization: this.authService.userToken}
     })
    }
    // Vérifier si 401 dans le next
    // Si 401 => rediriger vers login
    // sinon continue

    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status)) {
          // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
          this.authService.logout();
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
  }));
  }
}
