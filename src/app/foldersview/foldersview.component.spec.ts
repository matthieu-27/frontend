import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldersviewComponent } from './foldersview.component';

describe('FoldersviewComponent', () => {
  let component: FoldersviewComponent;
  let fixture: ComponentFixture<FoldersviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoldersviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoldersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
