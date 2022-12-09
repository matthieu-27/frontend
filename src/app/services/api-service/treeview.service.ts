import { Injectable, OnInit } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { FolderService } from './folder.service';

@Injectable({
  providedIn: 'root'
})
export class TreeviewService implements OnInit {

  root?: Folder;
  path: Folder[] = [];
  selected?: Folder;

  constructor(private folderService: FolderService) { }


  ngOnInit(): void {

  }




}
