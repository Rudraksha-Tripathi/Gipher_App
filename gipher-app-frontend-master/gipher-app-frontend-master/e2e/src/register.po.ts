import { browser, ElementFinder, element, by, promise } from 'protractor';

export class RegisterPage {
    routeToRegister() {
        browser.get('/register');
    }

    getEmailInputBox(): ElementFinder {
        return element(by.id("email"));
    }

    isEmailInputBoxPresent(): promise.Promise<boolean> {
        return this.getEmailInputBox().isPresent();
    }

    getUsernameInputBox(): ElementFinder {
        return element(by.id("username"));
    }

    isUsernameInputBox(): promise.Promise<boolean> {
        return this.getUsernameInputBox().isPresent();
    }

    getPasswordInputBox(): ElementFinder {
        return element(by.id("password"));
    }

    isPasswordInputBoxPresent(): promise.Promise<boolean> {
        return this.getPasswordInputBox().isPresent();
    }

    getDOBInputBox(): ElementFinder {
        return element(by.id("dob"));
    }

    isDOBInputBoxPresent(): promise.Promise<boolean> {
        return this.getPasswordInputBox().isPresent();
    }

    getMobileNumberInputBox(): ElementFinder {
        return element(by.id("mobile-number"));
    }

    isMobileNumberInputBoxPresent(): promise.Promise<boolean> {
        return this.getMobileNumberInputBox().isPresent();
    }

    getGenderRadioButton(): ElementFinder {
        return element(by.className("gender-radio"));
    }

    isGenderRadioButtonPresent(): promise.Promise<boolean> {
        return this.getGenderRadioButton().isPresent();
    }

    getFileInputButton(): ElementFinder {
        return element(by.id("file"));
    }

    isFileInputButtonPresent(): promise.Promise<boolean> {
        return this.getFileInputButton().isPresent();
    }

    // get submit button
    getSubmitButton(): ElementFinder {
        return element(by.buttonText('Submit'));
    }
    // check submit button is present or not
    isSubmitButtonPresent(): promise.Promise<boolean> {
        return this.getSubmitButton().isPresent();
    }

    // default values of input boxes
    getLoginInputBoxesDefaultValues(): any {
        let inputEmailId, inputUsername, inputPassword, inputDOB, inputImage, inputGender, inputMobileNumber;
        inputEmailId = this.getEmailInputBox().getAttribute('value');
        inputUsername = this.getUsernameInputBox().getAttribute('value');
        inputPassword = this.getPasswordInputBox().getAttribute('value');
        inputDOB = this.getDOBInputBox().getAttribute('value');
        inputImage = this.getFileInputButton().getAttribute('value');
        inputGender = this.getGenderRadioButton().getAttribute('value');
        return Promise.all([inputEmailId, inputUsername, inputPassword, inputDOB, inputImage, inputGender, inputMobileNumber]).then((values) => {
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