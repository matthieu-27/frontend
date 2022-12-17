import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap, Observable, Subject } from 'rxjs';
import { BookmarkService } from '../services/api-service/bookmark.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {

  private addBookmark = new Subject<string>();
  bookmarks$!: Observable<string[]>

  constructor(private bookmarkService: BookmarkService){}

  ngOnInit(): void {
    this.bookmarks$ = this.addBookmark.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((url: string) => this.bookmarkService.addBookmark(url)),
    );
  }

  add(url: string){
    this.addBookmark.next(url);
  }
}
