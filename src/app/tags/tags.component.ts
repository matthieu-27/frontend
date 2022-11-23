import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../models/bookmark';
import { Folder } from '../models/folder';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() folder?: Folder;
  @Input() bookmark?: Bookmark;
  folderTags: Tag[] = [];
  bookmarkTags: Tag[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
