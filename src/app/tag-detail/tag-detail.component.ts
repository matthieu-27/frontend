import { Component, OnInit } from '@angular/core';
import { TagService } from '../services/api-service/tag.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Tag } from '../models/tag';
@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})
export class TagDetailComponent implements OnInit {

  tag?: Tag;

  constructor(
    private route: ActivatedRoute,
    private tagService: TagService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTag();
  }
  
  getTag(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tagService.getTag(id)
      .subscribe(tag => this.tag = tag);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.tag) {
      this.tagService.updatetag(this.tag)
        .subscribe(() => this.goBack());
    }
  }
}
