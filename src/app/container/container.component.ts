import { Component } from '@angular/core';
import { Folder } from '../models/folder';
import { FolderService } from '../services/api-service/folder.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  root_folder!: Folder;

  constructor(private folderService: FolderService){
    const root_id = Number(localStorage.getItem('root_id'));
    this.folderService.getFolder(root_id).subscribe(folder => this.root_folder = folder);
  }

}
