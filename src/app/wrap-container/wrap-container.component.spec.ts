import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapContainerComponent } from './wrap-container.component';

describe('WrapContainerComponent', () => {
  let component: WrapContainerComponent;
  let fixture: ComponentFixture<WrapContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
