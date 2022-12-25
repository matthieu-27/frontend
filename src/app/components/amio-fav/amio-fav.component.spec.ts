import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmioFavComponent } from './amio-fav.component';

describe('AmioFavComponent', () => {
  let component: AmioFavComponent;
  let fixture: ComponentFixture<AmioFavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmioFavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmioFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
