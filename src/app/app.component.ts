import { Component, ViewContainerRef } from '@angular/core';
import { Folder } from './models/folder';
import { User } from './models/user';
import { FolderService } from './services/api-service/folder.service';
import { AuthService } from './services/auth-service/auth.service';
import { MessageService } from './services/ui-service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AMIO-FAV';

  user? : User = undefined;

  selectedFolder?: Folder;

  constructor(private authService: AuthService, private folderService: FolderService, private messageService: MessageService){

  }

}
