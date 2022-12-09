import { Component, OnInit } from '@angular/core';
import { Folder } from '../models/folder';
import { FolderService } from '../services/api-service/folder.service';

@Component({
  selector: 'app-foldersview',
  templateUrl: './foldersview.component.html',
  styleUrls: ['./foldersview.component.css']
})
export class FoldersviewComponent implements OnInit {

  folderPath?: Folder[];
  currentFolder?: Folder;
  folders: Folder[];
  root?: Folder;

  constructor(private folderService: FolderService){
    this.folders = [];
  }

  ngOnInit(): void {
    this.folderService.getFolders().subscribe({
      next: (folders) => {
        this.folders = folders;
        this.root = folders[0];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }



}
