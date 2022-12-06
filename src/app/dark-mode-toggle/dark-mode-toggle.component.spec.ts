import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkModeToggle } from './dark-mode-toggle.component';

describe('DarkModeToggleComponent', () => {
  let component: DarkModeToggle;
  let fixture: ComponentFixture<DarkModeToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkModeToggle ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkModeToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
