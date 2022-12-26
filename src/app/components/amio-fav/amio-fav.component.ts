import { Component } from '@angular/core';
import { Folder } from 'src/app/models/folder';
import { FolderService } from 'src/app/services/api-service/folder.service';

@Component({
  selector: 'amio-fav',
  templateUrl: './amio-fav.component.html',
  styleUrls: ['./amio-fav.component.css']
})
export class AmioFavComponent {

  selectedFolder?: Folder;

  constructor(private folderService: FolderService){}

  onSelect(folder: Folder){
    this.selectedFolder = folder;
  }


}
