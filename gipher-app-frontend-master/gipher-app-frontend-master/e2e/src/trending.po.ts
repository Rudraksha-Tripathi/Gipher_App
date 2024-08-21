import { browser, ElementFinder, element, by } from 'protractor';

export class TrendingPage {
    routeToTrending() {
        return browser.get('/trending');
    }

    isHeaderPresentinTrending(): ElementFinder {
        return element(by.tagName("h1"));
    }

    isAppCardPresentinTrending(): ElementFinder {
        return element(by.tagName("app-card"));
    }

    isAppRecommendedPresentinTrending(): ElementFinder {
        return element(by.tagName("app-recommended"));
    }
}