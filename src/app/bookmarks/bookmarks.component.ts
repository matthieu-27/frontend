import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookmark } from '../models/bookmark'; 
import { BookmarkService } from '../services/api-service/bookmark.service'; 
import { Folder } from '../models/folder'; 
import { MessageService } from '../services/ui-service/message.service'; 

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarks!: Bookmark[];
  title = "Mes marque-page";

  constructor(private messageService: MessageService, private bookmarkService: BookmarkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getBookmarks();
  }

  getBookmarks(): void {
    this.bookmarkService.getBookmarks().subscribe({
      next: rep => {
        this.bookmarks = rep;
      },
      error: err => {
        this.messageService.add(err.error);
      }
    })
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
