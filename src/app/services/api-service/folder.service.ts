import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Folder } from 'src/app/models/folder'; 
import { MessageService } from '../misc-service/message.service'; 
import { Bookmark } from 'src/app/models/bookmark'; 
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  /** GET folders from the server */
  getFolders(): Observable<Folder[]> {
    return this.http.get<Folder[]>(environment.apis.bookmarks + "folders", this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched folders')),
        catchError(this.handleError<Folder[]>('getFolders', []))
      );
  }

  /** GET folder by id. Will 404 if id not found */
  getFolder(id: number): Observable<Folder> {
    const url = `${environment.apis.bookmarks}folders/${id}`;
    return this.http.get<Folder>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched folder id=${id}`)),
      catchError(this.handleError<Folder>(`getFolder id=${id}`))
    );
  }

  /** GET folder by id. Will 404 if id not found */
  getFolderBookmarks(id: number): Observable<Bookmark[]> {
    const url = `${environment.apis.bookmarks}folders/${id}/`;
    return this.http.get<Bookmark[]>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched bookmarks from folder id=${id}`)),
      catchError(this.handleError<Bookmark[]>(`getFolderBookmarks id=${id}`))
    );
  }

  /** PUT: update the folder on the server */
  updateFolder(folder: Folder): Observable<any> {
    const url = `${environment.apis.bookmarks}folders/${folder.id}`;
    return this.http.put(url, folder, this.httpOptions).pipe(
      tap(_ => this.log(`updated folder id=${folder.id}`)),
      catchError(this.handleError<any>('updateFolder'))
    );
  }

  /** POST: add a new folder to the server */
  addFolder(folder: Folder): Observable<Folder> {
    return this.http.post<Folder>(environment.apis.bookmarks + "folders", folder, this.httpOptions).pipe(
      tap((newFolder: Folder) => this.log(`added folder w/ id=${newFolder.id}`)),
      catchError(this.handleError<Folder>('addFolder'))
    );
  }

  /** DELETE: delete the folder from the server */
  deleteFolder(id: number): Observable<Folder> {
    const url = `${environment.apis.bookmarks}folders/${id}`;

    return this.http.delete<Folder>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted folder id=${id}`)),
      catchError(this.handleError<Folder>('deleteHero'))
    );
  }

  /** Log a FolderService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FolderService: ${message}`);
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
