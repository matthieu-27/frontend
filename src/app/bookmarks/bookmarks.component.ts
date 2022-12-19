import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookmark } from '../models/bookmark'; 
import { BookmarkService } from '../services/api-service/bookmark.service'; 
import { Folder } from '../models/folder'; 
import { MessageService } from '../services/misc-service/message.service'; 

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  @Input() folder?: Folder;
  bookmarks?: Array<Bookmark>;

  constructor(private messageService: MessageService, private bookmarkService: BookmarkService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getFolderBookmarks();
  }

  getBookmarks(): void {
    this.bookmarkService.getBookmarks()
        .subscribe(bookmarks => this.bookmarks = bookmarks);
  }

  getFolderBookmarks(): void {
    this.bookmarks = [];
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookmarkService.getFolderBookmarks(id).subscribe({
      next: (data) => {

        data.forEach(element => {
          if(element.url) element.url = new URL(element.url);
        });

        this.bookmarks = data;
      }
    });
  }
}
