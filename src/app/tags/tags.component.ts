import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { Folder } from '../models/folder';
import { Tag } from '../models/tag';
import { TagService } from '../services/api-service/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() folder!: Folder;
  tags! : Tag[];


  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.getTags();
  }

  getTags(): void {
    this.tagService.getTags().subscribe(tags => this.tags = tags);
  }

  getFolderTags(id: number): void {
    this.tagService.getFolderTags(id).subscribe(tags => this.tags = tags);
  }

}
