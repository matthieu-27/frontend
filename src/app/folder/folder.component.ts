import { Component, Input } from '@angular/core';
import { Folder } from '../models/folder';
import { FolderService } from '../services/api-service/folder.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent {

  @Input() folder!: Folder;

  constructor(private folderService: FolderService){

  }

  delete(folder: Folder): void {
    this.folderService.deleteFolder(folder.id).subscribe();
  }
}
