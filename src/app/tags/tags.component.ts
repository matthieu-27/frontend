import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../models/bookmark';
import { Folder } from '../models/folder';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() folder?: Folder;
  @Input() bookmark?: Bookmark;

  constructor() { }

  ngOnInit(): void {
  }

}
