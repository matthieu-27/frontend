import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../models/bookmark';
import { Tag } from '../models/tag';
import { BookmarkService } from '../services/api-service/bookmark.service';
import { TagService } from '../services/api-service/tag.service';
import { MessageService } from '../services/misc-service/message.service';

@Component({
  selector: 'app-bookmark-detail',
  templateUrl: './bookmark-detail.component.html',
  styleUrls: ['./bookmark-detail.component.css']
})
export class BookmarkDetailComponent implements OnInit {

  tags: Tag[] = [];
  bookmark?: Bookmark;

  constructor(private messageService: MessageService, private bookmarkService: BookmarkService, private tagService: TagService){

  }

  ngOnInit(): void {
      
  }

}
