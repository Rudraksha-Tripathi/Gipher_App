import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatButtonModule, MatCardModule, MatButtonToggleModule, MatDialogModule, MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
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
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set submitted to true', async(() => {
    component.registrationForm;
    expect(component.registrationForm).toBeTruthy();
  }));
  it('should contain div tag', () => {
    let element = fixture.debugElement.query(By.css('div'));
    expect(element).toBeTruthy();
  });
  it('form invalid when email is empty', () => {
    expect(component.emailId.valid).toBeFalsy();
  });
  it('form invalid when password is empty', () => {
    expect(component.password.valid).toBeFalsy();
  });
  it('form invalid when gender is empty', () => {
    expect(component.gender.valid).toBeFalsy();
  });
  it('form invalid when date is empty', () => {
    expect(component.date.valid).toBeFalsy();
  });
  it('form invalid when mobileNumber is empty', () => {
    expect(component.mobileNumber.valid).toBeFalsy();
  });
  it('form should be invalid when the fields are left empty', async(() => {
    expect(component.emailId.valid).toBeFalsy();
    expect(component.password.valid).toBeFalsy();
    expect(component.gender.valid).toBeFalsy();
    expect(component.date.valid).toBeFalsy();
    expect(component.mobileNumber.valid).toBeFalsy();
  }));
});