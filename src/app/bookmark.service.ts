import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  private BASE_URL = "http://127.0.0.1:8000/api/bookmarks";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer 2|ZO0aCXDJZpkFhlgSDmhwZtgFuBtSspXq4MDR3rFw' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
  }
}
