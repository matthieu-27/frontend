import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Bookmark } from 'src/app/models/bookmark'; 
import { environment } from 'src/environments/environment';
import { MessageService } from '../ui-service/message.service';  
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  /** GET bookmarks from the server */
  getBookmarks(): Observable<Bookmark[]> {
    return this.http.get<Bookmark[]>(environment.apis.bookmarks + "bookmarks")
      .pipe(
        tap(_ => this.log('fetched bookmarks')),
        catchError(this.handleError<Bookmark[]>('getBookmarks', []))
      );
  }

  /** GET folder by id. Will 404 if id not found */
  getFolderBookmarks(id: number): Observable<Bookmark[]> {
    const url = `${environment.apis.bookmarks}folders/${id}/bookmarks`;
    return this.http.get<Bookmark[]>(url).pipe(
      tap(_ => this.log(`fetched bookmarks from folder id=${id}`)),
      catchError(this.handleError<Bookmark[]>(`getFolderBookmarks id=${id}`))
    );
  }
}
