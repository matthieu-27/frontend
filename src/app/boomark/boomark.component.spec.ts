import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoomarkComponent } from './boomark.component';

describe('BoomarkComponent', () => {
  let component: BoomarkComponent;
  let fixture: ComponentFixture<BoomarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoomarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoomarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
