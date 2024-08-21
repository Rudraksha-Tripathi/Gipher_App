import { RegisterPage } from "./register.po"

describe('REGISTER TEST', () => {
    let page: RegisterPage;

    beforeEach(() => {
        page = new RegisterPage();
        page.routeToRegister();
    })

    it('should have username input', () => {
        expect(page.isEmailInputBoxPresent())
            .toBeTruthy('<input id="email" type="email" [formControl]="email" class="form-control" placeholder="Email" /> should be present in register.component.html');
    });

    it('should have password input', () => {
        expect(page.isPasswordInputBoxPresent())
            .toBeTruthy('<input id="password" type="password" [formControl]="password" class="form-control" placeholder="Password" /> should be present in register.component.html');
    });

    it('should have a submit button', () => {
        expect(page.isSubmitButtonPresent())
            .toBeTruthy('<button mat-flat-button type="submit" [disabled]="!loginform.valid" class="btn btn-success">Submit</button> should be present in register.component.html');
    })

    it('should have DOB input', () => {
        expect(page.isDOBInputBoxPresent())
            .toBeTruthy('<input id="dob" type="date" [formControl]="date" class="form-control" /> should be present in register.component.ts');
    });

    it('should have Mobile Number input', () => {
        expect(page.isMobileNumberInputBoxPresent())
            .toBeTruthy('<input id="dob" type="date" [formControl]="date" class="form-control" /> should be present in register.component.ts');
    });

    it('should have gender radio button', () => {
        expect(page.isGenderRadioButtonPresent())
            .toBeTruthy('<input class="form-check-input gender-radio" type="radio" [formControl]="gender" value="male" /> Male<br /> should be present in register.component.ts');
    })

    it('should have a file input button', () => {
        expect(page.isFileInputButtonPresent())
            .toBeTruthy('<input id="file" type="file" accept="images/*" [formControl]="image" (change)="fileSelected($event)">');
    })
})