import { Component, OnInit } from '@angular/core';
import { Folder } from '../folder';
import { FolderService } from '../folder.service';
import { MessageService } from '../message.service';

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
}
