import { browser, element, by, ElementFinder, promise } from 'protractor';

export class Footer{
    routeToTrending() {
        return browser.get('/');
    }

    getCurrentURL() {
        return browser.getCurrentUrl();
    }

    getFacebookIconElement(): ElementFinder {
        return element(by.className("facebook-icon"));
    }

    isFacebookIconPresent(): promise.Promise<boolean> {
        return this.getFacebookIconElement().isPresent();
    }

    getInstagramIconElement(): ElementFinder {
        return element(by.className("instagram-icon"));
    }

    isInstagramIconPresent(): promise.Promise<boolean>{
        return this.getInstagramIconElement().isPresent();
    }

    getTwitterIconElement(): ElementFinder {
        return element(by.className("twitter-icon"));
    }

    isTwitterIconPresent(): promise.Promise<boolean>{
        return this.getTwitterIconElement().isPresent();
    }

    isFacebookLinkPresent(): promise.Promise<string> {
        return this.getFacebookIconElement().getAttribute("href");
    }

    isInstagramLinkPresent(): promise.Promise<string> {
        return this.getInstagramIconElement().getAttribute("href");
    }

    isTwitterLinkPresent(): promise.Promise<string> {
        return this.getTwitterIconElement().getAttribute("href");
    }

}