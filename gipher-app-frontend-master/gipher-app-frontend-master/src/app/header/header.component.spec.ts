import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule, FormsModule, FormGroupDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule, MatCardModule, MatButtonToggleModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterService } from '../services/router.service';
describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ReactiveFormsModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatTooltipModule,
        FormsModule,
        RouterTestingModule,
        MatTooltipModule,
        MatFormFieldModule,
        HttpClientModule,
        MatInputModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatSnackBarModule
      ],
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
 
  it('should contain li tag', () => {
    let element = fixture.debugElement.query(By.css('li'));
    expect(element).toBeTruthy();
  });

  it('should contain a tag', () => {
    let element = fixture.debugElement.query(By.css('a'));
    expect(element).toBeTruthy();
  });

  it('should contain nav tag', () => {
    let element = fixture.debugElement.query(By.css('nav'));
    expect(element).toBeTruthy();
  });

  it('should contain form tag', () => {
    let element = fixture.debugElement.query(By.css('form'));
    expect(element).toBeTruthy();
  });

  it('should contain select tag', () => {
    let element = fixture.debugElement.query(By.css('select'));
    expect(element).toBeTruthy();
  });

  it('should contain input tag', () => {
    let element = fixture.debugElement.query(By.css('input'));
    expect(element).toBeTruthy();
  });

  it('should contain button tag', () => {
    let element = fixture.debugElement.query(By.css('button'));
    expect(element).toBeTruthy();
  });

  it('should contain span tag', () => {
    let element = fixture.debugElement.query(By.css('span'));
    expect(element).toBeTruthy();
  });
});
