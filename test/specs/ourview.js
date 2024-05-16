import loginPage from '../Pages/login.page.js';
describe('ourviewpage page test cases and verifiction', () =>{

    it('Login successfull', async  ()=>{
        browser.url('https://staging.loghic.com/login.html');
        await browser.setWindowSize(1920, 1080)
        await loginPage.login('manish.pareek@kudosta.com','Kudos123')
        const headerMenu = await $('.lc-container')
        let header = await headerMenu.isDisplayed();
        console.log(header)
        await browser.pause(5000)
        const profileButton = await $('#leftNavUser_image')
        await profileButton.click()
        await browser.pause(5000)
        const ourviewButton = await $('.lc-miniPopupCard-title')
        await ourviewButton.click()
        await browser.pause(5000)
    })

    it('Ourview page verify data ', async () =>{

        const ourviewBtn = await $('//*[@id="account-pages"]/div/div/div[1]/div/div[2]/div[1]/div[2]')
        await ourviewBtn.click()
        await browser.pause(5000)
        const userAcctivity = await $('#lc_overview_useractivity')
        console.log(await browser.execute(() => window.scrollY)) // returns 0
        await browser.scroll(0, 10000)
        console.log(await browser.execute(() => window.scrollY)) // returns 500
        await browser.pause(5000)
        const userAcctivityData = await userAcctivity.getText()
        console.log('user data  : ', userAcctivityData)
    })

})