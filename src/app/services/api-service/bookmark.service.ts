import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Bookmark } from 'src/app/models/bookmark'; 
import { environment } from 'src/environments/environment';
import { MessageService } from '../misc-service/message.service';  

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  /** GET bookmarks from the server */
  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(environment.apis.bookmarks + "bookmarks")
      .pipe(
        tap(_ => this.log('fetched bookmarks')),
        catchError(this.handleError<Bookmark[]>('getBookmarks', []))
      );
  }

  /** GET bookmarks inside a Folder */
  getFolderBookmarks(id: number){
    return this.http.get<Bookmark[]>(environment.apis.bookmarks + "folders/" + id + "/bookmarks")
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
