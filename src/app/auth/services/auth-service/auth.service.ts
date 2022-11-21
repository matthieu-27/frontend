import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MessageService } from 'src/app/message.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userToken = '';
  public get userToken(){ return this._userToken; }

  private logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public logged$ = this.logged.asObservable();

  constructor(private http: HttpClient, private message: MessageService) { }

  public SignIn(email: string, password: string) :Observable<boolean> {
    return new Observable( obs => {
      this.http.post<string>(`${environment.apis.bookmarks}login`, { email, password }).subscribe( {
        next: token => {
          this._userToken = 'Bearer ' + token;
          this.changeLoggedValue(true);
          obs.next(true);
          obs.complete();
        },
        error: (err: HttpErrorResponse) => {
          this.message.add(err.error);
          obs.next(false);
          obs.complete();
        }
      });
    })
  }

  public logout() : void {
    this.logged$ = of(false);
    this._userToken = '';
    this.logged = new BehaviorSubject<boolean>(false);
  }

  public isLogged  = () => {
    return this.logged.getValue();
  }

  private changeLoggedValue(newValue : boolean) {
    this.logged.next(newValue);
  }
}
