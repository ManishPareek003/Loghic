import loginPage from '../Pages/login.page.js';
describe('News page test cases and verifiction', () =>{

    it('Login successfull', async  ()=>{
        browser.url('https://staging.loghic.com/login.html');
        await browser.setWindowSize(1920, 1080)
        await loginPage.login('manish.pareek@kudosta.com','Kudos123')
        const headerMenu = await $('.lc-container')
        let header = await headerMenu.isDisplayed();
        console.log(header)
        await browser.pause(5000)
    })

    it('verify switching between tabs All Companies Watchlist Following Gainers Losers', async () =>{

        const hedaerSecurityBtn = await $('/html/body/div[12]/div/div[1]/div[2]/ul/li[3]')
        await hedaerSecurityBtn.click()
        await browser.pause(5000)

        const watchlistBtn = await $('/html/body/div[14]/div/div/div[1]/div[1]/ul/li[2]')
        await watchlistBtn.click()
        await browser.pause(5000)
        const FollowingBtn = await $('/html/body/div[14]/div/div/div[1]/div[1]/ul/li[3]')
        await FollowingBtn.click()
        await browser.pause(5000)
        const GainersBtn = await $('/html/body/div[14]/div/div/div[1]/div[1]/ul/li[4]')
        await GainersBtn.click()
        await browser.pause(5000)
        const LosersBtn = await $('/html/body/div[14]/div/div/div[1]/div[1]/ul/li[5]')
        await LosersBtn.click()
        await browser.pause(5000)
        const allsecurityBtn = await $('/html/body/div[14]/div/div/div[1]/div[1]/ul/li[1]')
        await  allsecurityBtn.click()
        await browser.pause(5000)
    })
        
})
