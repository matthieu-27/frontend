import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private BASE_URL = "http://127.0.0.1:8000/api/";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization': 'Bearer 2|ZO0aCXDJZpkFhlgSDmhwZtgFuBtSspXq4MDR3rFw' })
  };
  private userToken?: string;

  constructor(private messageService: MessageService, private http: HttpClient) { }
}
