import { Injectable, Input } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { BaseService } from '../api-service/base.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  @Input()
  get folder(): Folder { return this._folder; }
  set folder(folder: Folder) {
    this._folder = folder || '<no folder set>';
  }
  private _folder = <Folder>{};

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}