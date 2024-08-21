import { Footer } from "./footer.po";

describe('FOOTER TEST', () => {
    let page: Footer;
    
    beforeEach(() => {
        page = new Footer();
        page.routeToTrending();
    })
    
    it('should have facebook icon', () => {
        expect(page.isFacebookIconPresent()).toBeTruthy('<img class="social-icon" src="../../assets/facebook.svg" /> should be present in footer.component.html');
    });

    it('should have facebook link',()=>{
        expect(page.isFacebookLinkPresent()).toBeTruthy('https://facebook.com is present in footer.component.html');
    })

    it('should have instagram icon', () => {
        expect(page.isInstagramIconPresent()).toBeTruthy('<img class="social-icon" src="../../assets/insragram.svg" /> should be present in footer.component.html');
    });

    it('should have instagram link',()=>{
        expect(page.isInstagramLinkPresent()).toBeTruthy('https://instagram.com is present in footer.component.html');
    })

    it('should have twitter icon', () => {
        expect(page.isTwitterIconPresent()).toBeTruthy('<img class="social-icon" src="../../assets/twitter.svg" /> should be present in footer.component.html');
    });

    it('should have twitter link',()=>{
        expect(page.isTwitterLinkPresent()).toBeTruthy('https://twitter.com is present in footer.component.html');
    })

    // it('should route to twitter',()=>{
    //     page.onClickInstagramLink();
    //     page.getCurrentURL().then((url)=>{
    //         if(url.indexOf("http://www.twitter.com/") > -1) {
    //             expect(page.getCurrentURL()).toContain('http://www.twitter.com','should navigate to twitter');
    //         }else{
    //             expect(page.getCurrentURL()).toContain('http://www.twitter.com/','should navigate to twitter');
    //         }
    //     })
    // })
})