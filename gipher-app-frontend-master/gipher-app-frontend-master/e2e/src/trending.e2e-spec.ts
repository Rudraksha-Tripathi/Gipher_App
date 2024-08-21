import { browser, logging } from 'protractor';
import { getMaxListeners } from 'cluster';
import { TrendingPage } from './trending.po';

describe('TRENDING TEST', () => {
    let page: TrendingPage;
    beforeEach(() => {
        page = new TrendingPage();
        page.routeToTrending();
    });
    // h1 in trending page
    it('should have header', () => {
        expect(page.isHeaderPresentinTrending()).toBeTruthy('<h1> should exist in trending.component.html');
    });

    it('should render <app-card>', () => {
        expect(page.isAppCardPresentinTrending()).toBeTruthy('<app-card> should exist in trending.component.html');
    });

    it('should render <app-recommended>', () => {
        expect(page.isAppRecommendedPresentinTrending()).toBeTruthy('<app-recommended> should exist in trending.component.html');
    });

});