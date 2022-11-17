import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bookmark } from '../bookmark';
import { BookmarkService } from '../bookmark.service';
import { Folder } from '../folder';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-bookmarks',
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
    this.bookmarkService.getFolderBookmarks(id).subscribe(bookmarks => this.bookmarks = bookmarks);
  }
}
