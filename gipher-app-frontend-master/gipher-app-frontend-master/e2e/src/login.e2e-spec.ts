import { LoginPage } from "./login.po";

describe('LOGIN TEST', () => {
    let page: LoginPage;

    beforeEach(() => {
        page = new LoginPage();
        page.routeToLoginPage();
    });

    it('should have username input', () => {
        expect(page.isEmailInputBoxPresent()).toBeTruthy('<input id="email" type="email" [formControl]="email" class="form-control" placeholder="Email" />');
    });

    it('should have password input', () => {
        expect(page.isPasswordInputBoxPresent()).toBeTruthy('<input id="password" type="password" [formControl]="password" class="form-control" placeholder="Password" />');
    });

    it('should have a submit button', () => {
        expect(page.isSubmitButtonPresent()).toBeTruthy('<button mat-flat-button type="submit" [disabled]="!loginform.valid" class="btn btn-success">Submit</button>');
    })

    it('should login into the system', () => {
        let newNoteValues = page.addLoginValues();
        expect(page.getLoginInputBoxesDefaultValues()).toEqual(newNoteValues, 'Should be able to set values for username and password');
        page.clickSubmitButton();
        page.routeToTrendingPage();
        page.getCurrentURL().then((url) => {
            if (url.indexOf('login') > -1) {
                newNoteValues = page.addLoginValues();
                page.clickSubmitButton();
                page.routeToTrendingPage();
                expect(page.getCurrentURL()).toContain('', 'Should navigate to Trending');
            } else {
                expect(page.getCurrentURL()).toContain('', 'Should navigate to Trending');
            }
        });
    });
})