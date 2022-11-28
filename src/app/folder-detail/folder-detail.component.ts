import { Component, Input, OnInit } from '@angular/core';
import { Folder } from '../models/folder'; 
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FolderService } from '../services/api-service/folder.service'; 

@Component({
  selector: 'app-folder-detail',
  templateUrl: './folder-detail.component.html',
  styleUrls: ['./folder-detail.component.css']
})
export class FolderDetailComponent implements OnInit {

  @Input() folder!: Folder;

  constructor(
    private route: ActivatedRoute,
    private folderService: FolderService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFolder();

  }
  
  getFolder(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.folderService.getFolder(id)
      .subscribe(folder => this.folder = folder);
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
