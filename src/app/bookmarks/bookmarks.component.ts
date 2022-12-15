import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookmark } from '../models/bookmark'; 
import { BookmarkService } from '../services/api-service/bookmark.service'; 
import { Folder } from '../models/folder'; 
import { Location } from '@angular/common';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarks?: Bookmark[];
  title = "Mes marque-page";

  constructor(
    private route: ActivatedRoute,
    private bookmarkService: BookmarkService,
    private location: Location
  ) { 
   }

  ngOnChanges(){
  } 

  ngOnInit(): void {
    this.getBookmarks();
  }
  
  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
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
