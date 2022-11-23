import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from '../misc-service/message.service';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  
}
