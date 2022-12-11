import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag';
import { environment } from 'src/environments/environment';
import { MessageService } from '../ui-service/message.service';
import { BaseService } from './base.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  getTags(): Observable<Tag[]>  {
    return this.http.get<Tag[]>(environment.apis.bookmarks + "tags")
      .pipe(
        tap(_ => this.log('fetched tags')),
        catchError(this.handleError<Tag[]>('getTags', []))
      );
  }

  getTag(id: number): Observable<Tag>{
    return this.http.get<Tag>(`${environment.apis.bookmarks}tags/${id}`)
    .pipe(
      tap(_ => this.log('fetched tags')),
      catchError(this.handleError<Tag>(`getTag id=${id}`))
    );
  }

  /** GET tags by folder id. Will 404 if id not found */
  getFolderTags(id: number): Observable<Tag[]> {
    const url = `${environment.apis.bookmarks}folders/${id}/tags`;
    return this.http.get<Tag[]>(url).pipe(
      tap(_ => this.log(`fetched folder id=${id}`)),
      catchError(this.handleError<Tag[]>(`getFolderTags id=${id}`))
    );
  }

    /** PUT: update the tag on the server */
    updatetag(tag: Tag): Observable<any> {
      const url = `${environment.apis.bookmarks}tags/${tag.id}`;
      return this.http.put(url, tag).pipe(
        tap(_ => this.log(`updated tag id=${tag.id}`)),
        catchError(this.handleError<any>('updatetag'))
      );
    }
  
    /** POST: add a new tag to the server */
    addtag(tag: Tag): Observable<Tag> {
      return this.http.post<Tag>(environment.apis.bookmarks + "tags", tag).pipe(
        tap((newtag: Tag) => this.log(`added tag w/ id=${newtag.id}`)),
        catchError(this.handleError<Tag>('addtag'))
      );
    }
  
    /** DELETE: delete the tag from the server */
    deletetag(id: number): Observable<Tag> {
      const url = `${environment.apis.bookmarks}tags/${id}`;
  
      return this.http.delete<Tag>(url).pipe(
        tap(_ => this.log(`deleted tag id=${id}`)),
        catchError(this.handleError<Tag>('deletetag'))
      );
    }

}
