import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MessageService } from '../misc-service/message.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userToken = '';
  public get userToken(){ return this._userToken; }

  private logged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public logged$ = this.logged.asObservable();

  constructor(private http: HttpClient, private message: MessageService) { 
    if(localStorage.getItem("access_token") !== null){
      this._userToken = String(localStorage.getItem("access_token"));
      this.changeLoggedValue(true);
    } 
  }

  public SignIn(email: string, password: string) :Observable<boolean> {
    return new Observable( obs => {
      this.http.post<any>(`${environment.apis.bookmarks}login`, { email, password }).subscribe( {
        next: data => {
          this._userToken = 'Bearer ' + data.token;
          localStorage.setItem("access_token", this.userToken);
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
    localStorage.removeItem("access_token");
    this.logged.next(false);
    this._userToken = '';
  }

  public isLogged  = () => {
    return this.logged.getValue();
  }

  private changeLoggedValue(newValue : boolean) {
    this.logged.next(newValue);
  }


}
