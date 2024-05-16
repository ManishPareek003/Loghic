import loginPage from '../Pages/login.page.js';
describe('Advisor dashboard test cases and verifiction', () =>{

    it('Login successfull', async  ()=>{
        browser.url('https://staging.loghic.com/login.html');
        await browser.setWindowSize(1920, 1080)
        await loginPage.login('manish.pareek@kudosta.com','Kudos123')
        const headerMenu = await $('.lc-container')
        let header = await headerMenu.isDisplayed();
        console.log(header)
        await browser.pause(5000)
    })

    it('Go to the advisor dashboard', async  ()=>{
      
        const profileButton = await $('#leftNavUser_image')
        await profileButton.click()
        await browser.pause(5000)
        const ourviewButton = await $('.lc-miniPopupCard-title')
        await ourviewButton.click()
        await browser.pause(5000)
    })

    it('Verify User edit profile', async  ()=>{
      
        const editProfileBtn = await $('.lc-gBtn_editProfile')
        await editProfileBtn.click()
        await browser.pause(5000)
        const firstName = await $('#useraccountfname_input')
        const pfirstName = await firstName.getValue()
        console.log('Print first name value before change  :', pfirstName)
        await firstName.click()
        await firstName.clearValue()
        await firstName.setValue('Manishk')
        // await browser.pause(5000)
        const lastName = await $('#useraccountlname_input')
        const llastName = await  lastName.getValue()
        console.log('Print last name value before change  :',  llastName)
        await  lastName.click()
        await  lastName.clearValue()
        await  lastName.setValue('Pareek')
        // await browser.pause(5000)
    })

    it('address field verify', async () => {

        const addressField = await $('#useraccountaddress_input')
        console.log(await browser.execute(() => window.scrollY)) // returns 0
        await browser.scroll(0, 5000)
        console.log(await browser.execute(() => window.scrollY)) // returns 500
        await addressField.clearValue()
        const saveButton = await $('//*[@id="lcUseraAccountEdit"]/div[8]/button')
        await saveButton.waitForClickable({ timeout: 5000 })
        await saveButton.click()
        const errorMsg = await $('#useraccountaddress_input-error')
        if (await errorMsg.isDisplayed()) {
             await addressField.setValue('jaipurr')
        }
        await saveButton.click()
        const siteAlrtMsg = await $('#siteAlertMessage')
        await siteAlrtMsg.isDisplayed()
        await expect(siteAlrtMsg).toHaveTextContaining('Profile is updated successfully')
        await browser.pause(5000)
        
    })

})