import { Component, Input } from '@angular/core';
import { Folder } from '../models/folder';
import { FolderService } from '../services/api-service/folder.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Tag } from '../models/tag';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent {
  @Input() parent: Folder | undefined;
  @Input() folder!: Folder;

  tags: Tag[] = [];

  constructor(private folderService: FolderService){
  }

  delete(folder: Folder): void {
    this.folderService.deleteFolder(folder.id).subscribe({
      next:() => {
        this.parent!.children = this.parent!.children!.filter( f => f.id !== this.folder.id);
      }
    });
  }
}
