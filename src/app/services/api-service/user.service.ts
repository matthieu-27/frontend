import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../misc-service/message.service'; 

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private messageService: MessageService, private http: HttpClient) { }



}
