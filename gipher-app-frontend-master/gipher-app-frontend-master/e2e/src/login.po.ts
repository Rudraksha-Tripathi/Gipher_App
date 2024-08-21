import { browser, ElementFinder, element, by, promise } from 'protractor';

export class LoginPage {
    routeToLoginPage() {
        return browser.get('/login');
    }

    routeToTrendingPage() {
        return browser.get('/trending');
    }

    getCurrentURL() {
        return browser.getCurrentUrl();
    }

    getEmailInputBox(): ElementFinder {
        return element(by.id("email"));
    }

    isEmailInputBoxPresent(): promise.Promise<boolean> {
        return this.getEmailInputBox().isPresent();
    }

    getPasswordInputBox(): ElementFinder {
        return element(by.id("password"));
    }

    isPasswordInputBoxPresent(): promise.Promise<boolean> {
        return this.getPasswordInputBox().isPresent();
    }

    // get submit button
    getSubmitButton(): ElementFinder {
        return element(by.buttonText('Submit'));
    }
    // check submit button is present or not
    isSubmitButtonPresent(): promise.Promise<boolean> {
        return this.getSubmitButton().isPresent();
    }
    // click submit button
    clickSubmitButton(): promise.Promise<void> {
        return this.getSubmitButton().click();
    }

    // default values of input boxes
    getLoginInputBoxesDefaultValues(): any {
        let inputUsername, inputPassword;
        inputUsername = this.getEmailInputBox().getAttribute('value');
        inputPassword = this.getPasswordInputBox().getAttribute('value');
        return Promise.all([inputUsername, inputPassword]).then((values) => {
            return values;
        });
    }

    // get username and password details
    getMockLoginDetail(): any {
        const loginDetail: any = { username: 'stranger@gmail.com', password: 'password' };
        return loginDetail;
    }

    // set username and password input box values
    addLoginValues(): any {
        const login: any = this.getMockLoginDetail();
        this.getEmailInputBox().sendKeys(login.username);
        this.getPasswordInputBox().sendKeys(login.password);
        return Object.keys(login).map(key => login[key]);
    }
}