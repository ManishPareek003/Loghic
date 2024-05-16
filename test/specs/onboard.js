import loginPage from '../Pages/login.page.js';
describe('Onboard page test cases and verifiction', () =>{

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

    it('Already onboarded user data verify', async () => {

        await $('#Onboard').click()
        const headerText = await $('.onboardDetailBox')
        await expect( headerText).toHaveTextContaining(['Account is ready to be used, Your active account is:'])
        await browser.pause(5000)
        const userDetails = await $('.advisor_info_warp')
        const userInfoCard = await userDetails.getText()
        console.log('Print details  : ', userInfoCard)


    })


})