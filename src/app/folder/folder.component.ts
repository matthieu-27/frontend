import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { Bookmark } from '../models/bookmark';
import { Folder } from '../models/folder';
import { BookmarkService } from '../services/api-service/bookmark.service';
import { FolderService } from '../services/api-service/folder.service';

@Component({
  selector: 'li [app-folder]',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  @Input() parent: Folder | undefined;
  @Input() folder!: Folder;
  protected isOpen = false;
  bookmarks?: Bookmark[];
  protected addButton = false;
  @Output() addedFolder = new EventEmitter<boolean>();

  constructor(private folderService: FolderService, private bookmarkService: BookmarkService){
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
  }

  addFolder(){
    this.addButton = !this.addButton;
  }

  expand(): void{
    this.isOpen = !this.isOpen;
  }

  delete(folder: Folder): void {
    this.folderService.deleteFolder(folder.id!).subscribe({
      next:() => {
        this.parent!.children = this.parent!.children!.filter( f => f.id! !== this.folder.id);
      }
    });
  }

  add(name: string, parent_id: number): void {
    name = name.trim();
    if (!name) { return; }
    let folder = <Folder>{name: name, parent_id: parent_id};
    this.folderService.addFolder(folder)
      .subscribe(folder => {
        this.parent!.children?.push(folder);
      });
  }

}
