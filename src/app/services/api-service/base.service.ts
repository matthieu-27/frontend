import { Injectable } from '@angular/core';
import { MessageService } from '../ui-service/message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  messageService = new MessageService();


  /** Log a message with the MessageService */
  public log(message: string) {
    this.messageService.add(`BaseService: ${message}`);
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
   };
  }
}
