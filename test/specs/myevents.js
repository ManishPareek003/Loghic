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

    it('My events page open and click on add event button', async () =>  {

        let myeventsButton = await $('//*[@id="account-pages"]/div/div/div[1]/div/div[2]/div[9]')
        await myeventsButton.click()
        await browser.pause(5000)
        const addEventButton = await $('//*[@id="account-pages"]/div/div/div[2]/div[2]/div[1]/div/a')
        await addEventButton.click()
        await browser.pause(5000)
        const saveEventButton = await $('#Input_Event_Submit')
        await saveEventButton.click()
        const titleEvent = await $('#Input_Event_Title')
        let reqErrorName = await $('#Input_Event_Title-error')
        await expect(reqErrorName).toHaveTextContaining('This field is required!')

        if(await reqErrorName.isDisplayed()){
            await titleEvent.setValue('Auto test event')
        }
       
        let reqErrorDate = await $('#Input_Event_Date-error')
        const selectDate = await $('#Input_Event_Date')
        await expect(reqErrorDate).toHaveTextContaining('This field is required!')
        if(await reqErrorDate.isDisplayed()){
            await selectDate.setValue('20/05/2024')
        }
       

        let reqErrorStime = await $('#Input_Event_Time-error')
        const startTime = await $('#Input_Event_Time')
        await expect(reqErrorStime).toHaveTextContaining('This field is required!')
        if(await reqErrorStime.isDisplayed()){
            await startTime.setValue('10 : 15 AM')
        }
      

        let reqErrorEtime = await $('#Input_Event_Time_End-error')
        const endTime = await $('#Input_Event_Time_End')
        await expect(reqErrorEtime).toHaveTextContaining('This field is required!')
        if(await reqErrorEtime.isDisplayed()){
            await endTime.setValue('01 : 10 PM')
        }
      

        let reqErrorTimezone = await $('#Input_Event_TimeZone-error')
        const timeZoneSet = await $('#Input_Event_TimeZone')
        await expect(reqErrorTimezone).toHaveTextContaining('Please select timezone!')
        if(await reqErrorTimezone.isDisplayed()){
            await timeZoneSet.click()
        }
       

        let reqErrorCategory = await $('#Input_Event_Category-error')
        const setCategory = await $('#select2-Input_Event_Category-container')
        await expect(reqErrorCategory).toHaveTextContaining('This field is required!')
        if(await reqErrorCategory.isDisplayed()){
            await setCategory.click()
        }
       

        let reqErrorDiscription = await $('#Input_Event_Description-error')
        const eventDiscription = await $('#Input_Event_Description')
        await expect(reqErrorDiscription).toHaveTextContaining('This field is required!')
        if(await reqErrorDiscription.isDisplayed()){
            await eventDiscription.setValue('Test event')
        }
       

        let reqErrorUrl = await $('#Event_Url_Output-error')
        const addUrl = await $('#Event_Url_Output')
        await expect(reqErrorUrl).toHaveTextContaining('This field is required!')
        if(await reqErrorUrl.isDisplayed()){
            await addUrl.setValue('https://stagingloghic.com/')
        }
      




    })
})