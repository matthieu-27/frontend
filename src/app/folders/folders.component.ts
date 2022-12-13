import { Component, OnInit, Output } from '@angular/core';
import { Folder } from '../models/folder'; 
import { FolderService } from '../services/api-service/folder.service'; 
import { MessageService } from '../services/ui-service/message.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  root: Folder = <Folder>{ id: 0, name: "", children: [], hidden: false };
  title = "Mes dossiers";
  selectedFolder?: Folder;
  
  constructor(private folderService: FolderService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getFolders();
  }

  onSelect(folder: Folder): void {
    this.selectedFolder = folder;
  }

  getFolders(): void {
    this.folderService.getFolders()
        .subscribe(folders => this.root.children = folders);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.folderService.addFolder({ name } as Folder)
      .subscribe(folder => {
        this.root!.children?.push(folder);
      });
  }

}
