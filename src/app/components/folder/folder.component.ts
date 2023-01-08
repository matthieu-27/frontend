import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { Folder } from 'src/app/models/folder';

@Component({
  selector: 'li [app-folder]',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent {

  @Input() folder!: Folder;
  @Output() folderEmitter: EventEmitter<Folder> = new EventEmitter<Folder>();
  selectedFolder?: Folder;

  onSelect(folder: Folder) {
    this.folderEmitter.emit(folder);
    this.selectedFolder = folder;
  }

}
