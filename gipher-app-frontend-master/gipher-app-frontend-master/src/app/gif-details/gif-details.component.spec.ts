import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GifDetailsComponent } from './gif-details.component';

describe('GifDetailsComponent', () => {
  let component: GifDetailsComponent;
  let fixture: ComponentFixture<GifDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GifDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GifDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
