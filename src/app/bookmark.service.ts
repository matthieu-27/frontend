import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Bookmark } from './bookmark';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  private BASE_URL = "http://127.0.0.1:8000/api/";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer 2|ZO0aCXDJZpkFhlgSDmhwZtgFuBtSspXq4MDR3rFw' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  /** GET bookmarks from the server */
  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(this.BASE_URL + "bookmarks", this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched bookmarks')),
        catchError(this.handleError<Bookmark[]>('getBookmarks', []))
      );
  }

  getFolderBookmarks(id: number){
    return this.http.get<Bookmark[]>(this.BASE_URL + "folders/" + id + "/bookmarks", this.httpOptions)
    .pipe(
      tap(_ => this.log('fetched bookmarks from folder id=' + id)),
      catchError(this.handleError<Bookmark[]>('getFolderBookmarks', []))
    );
  }

  private log(message: string) {
    this.messageService.add(`BookmarkService: ${message}`);
  }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
     private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
     };
    }
}
