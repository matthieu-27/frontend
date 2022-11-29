import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tag';
import { environment } from 'src/environments/environment';
import { MessageService } from '../misc-service/message.service';
import { BaseService } from './base.service';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagService extends BaseService {

  constructor(private http: HttpClient) { 
    super(new MessageService());
  }

  getTags(): Observable<Tag[]>  {
    return this.http.get<Tag[]>(environment.apis.bookmarks + "tags")
      .pipe(
        tap(_ => this.log('fetched tags')),
        catchError(this.handleError<Tag[]>('getTags', []))
      );
  }


}
