import { Component, Input, OnInit } from '@angular/core';
import { Folder } from '../folder';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FolderService } from '../folder.service';
import { Bookmark } from '../bookmark';

@Component({
  selector: 'app-folder-detail',
  templateUrl: './folder-detail.component.html',
  styleUrls: ['./folder-detail.component.css']
})
export class FolderDetailComponent implements OnInit {

  @Input() folder?: Folder;
  bookmarks: Bookmark[] = [];

  constructor(
    private route: ActivatedRoute,
    private folderService: FolderService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFolder();
    this.getFolderBookmarks();
    console.log(this.bookmarks);
  }
  
  getFolder(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.folderService.getFolder(id)
      .subscribe(folder => this.folder = folder);
  }

  getFolderBookmarks(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.folderService.getFolderBookmarks(id)
      .subscribe(bookmarks => this.bookmarks = bookmarks);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.folder) {
      this.folderService.updateFolder(this.folder)
        .subscribe(() => this.goBack());
    }
  }

}
