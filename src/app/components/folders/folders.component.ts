import { Component, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { FolderService } from 'src/app/services/api-service/folder.service';


@Component({
  selector: 'folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  folders: Folder[] = [];
  rootFolder: Folder;
  rootId: number;
  selectedFolder?: Folder;

  constructor(private folderService: FolderService){
    this.rootId = Number(localStorage.getItem("root_id"));
    this.rootFolder = this.folderService.selectedFolder();
  }

  ngOnInit(): void {
    this.getFolders();
  }

  onSelected(folder: Folder){
    this.selectedFolder = folder;
  }

  getFolders(): void {
    this.folderService.getFolders()
        .subscribe(folders => this.folders = folders);
  }

  addChildrens(): void {
    this.folderService.getFolder(this.rootFolder.id).subscribe({
      next: children => this.rootFolder = children,
      error: err => console.log(err.error),
    });
  }

}
