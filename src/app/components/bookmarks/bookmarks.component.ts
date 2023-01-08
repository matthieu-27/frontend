import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Bookmark } from '../../models/bookmark'; 
import { BookmarkService } from '../../services/api-service/bookmark.service'; 
import { Folder } from '../../models/folder'; 
import { FolderService } from 'src/app/services/api-service/folder.service';

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit, OnChanges {

  @Input() folder!: Folder;
  bookmarks?: Bookmark[];
  root_id: number;

  constructor(private folderService: FolderService, private bookmarkService: BookmarkService) {
    this.root_id = Number(localStorage.getItem("root_id"));
  }

  ngOnInit(): void {
    if(this.folder === undefined){
       this.getFolderBookmarks(this.root_id);
    } else {
      this.getFolderBookmarks(this.folder.id);
    }
  }
  
  ngOnChanges(){
    this.getFolderBookmarks(this.folder.id);
  } 

  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }

  getFolderBookmarks(id: number): void {
    this.bookmarkService.getFolderBookmarks(id)
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }

}
