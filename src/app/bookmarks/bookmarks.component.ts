import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookmark } from '../models/bookmark'; 
import { BookmarkService } from '../services/api-service/bookmark.service'; 
import { Folder } from '../models/folder'; 
import { Location } from '@angular/common';
import { FolderService } from '../services/api-service/folder.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarks?: Bookmark[];
  title = "Mes marque-page";
  @Input() folder?: Folder;

  constructor(
    private bookmarkService: BookmarkService,
    private location: Location
  ) {}

  ngOnChanges(){
  } 

  ngOnInit(): void {
    console.log(this.folder);
    if(this.folder !== undefined){
      this.getFolderBookmarks(this.folder.id!);
    }else{
      this.getBookmarks();
    }
  }
  
  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }

  getFolderBookmarks(id: number): void {
    this.bookmarkService.getFolderBookmarks(id)
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }

  goBack(): void {
    this.location.back();
  }

  /**
   * Open link in current tab
   * @param url 
   */
  open(url: string): void{
    window.open(url, "_self");
  }

  /**
   * Open link in current tab
   * @param url 
   */
  openInNewTab(url: string): void{
    window.open(url, "_blank");
  }
}
