import { Component, OnInit } from '@angular/core';
import { Folder } from '../models/folder'; 
import { FolderService } from '../services/api-service/folder.service'; 
import { MessageService } from '../services/misc-service/message.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  folders: Folder[] = [];
  selectedFolder?: Folder;
  
  constructor(private folderService: FolderService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getFolders();
  }

  onSelect(folder: Folder): void {
    this.selectedFolder = folder;
    this.messageService.add(`FolderComponent: Selected folder id=${folder.id}`);
  }

  getFolders(): void {
    this.folderService.getFolders()
        .subscribe(folders => this.folders = folders);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.folderService.addFolder({ name } as Folder)
      .subscribe(folder => {
        this.folders.push(folder);
      });
  }

  delete(folder: Folder): void {
    this.folders = this.folders.filter(h => h !== folder);
    this.folderService.deleteFolder(folder.id).subscribe();
  }
}
