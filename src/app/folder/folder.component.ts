import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../models/bookmark';
import { Folder } from '../models/folder';
import { BookmarkService } from '../services/api-service/bookmark.service';
import { FolderService } from '../services/api-service/folder.service';

@Component({
  selector: 'li [app-folder]',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  @Input() parent: Folder | undefined;
  @Input() folder!: Folder;
  protected isOpen = false;
  bookmarks?: Bookmark[];

  constructor(private folderService: FolderService, private bookmarkService: BookmarkService){
  }

  ngOnInit(): void {
  }

  delete(folder: Folder): void {
    this.folderService.deleteFolder(folder.id).subscribe({
      next:() => {
        this.parent!.children = this.parent!.children!.filter( f => f.id !== this.folder.id);
      }
    });
  }

  expand(): void{
    this.isOpen = !this.isOpen;
  }




  

}
