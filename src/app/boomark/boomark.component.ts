import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Bookmark } from '../models/bookmark';
import { Folder } from '../models/folder';
import { BookmarkService } from '../services/api-service/bookmark.service';

@Component({
  selector: 'app-boomark',
  templateUrl: './boomark.component.html',
  styleUrls: ['./boomark.component.css']
})
export class BoomarkComponent implements OnInit {

  @Input() folder!: Folder;
  bookmarks?: Bookmark[];

  constructor(private bookmarkService: BookmarkService){

  }
  
  ngOnInit(): void {
    this.getFolderBookmarks(this.folder.id!)
  }

  ngOnChanges(){
    this.getFolderBookmarks(this.folder.id!);
  }

  getFolderBookmarks(id: number): void {
    this.bookmarkService.getFolderBookmarks(id)
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }


}
