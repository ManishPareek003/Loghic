import loginPage from '../Pages/login.page.js';
describe('My loghic page verify functions ', () =>{

    it('Login successfull', async  ()=>{
        browser.url('https://staging.loghic.com/login.html');
        await browser.setWindowSize(1920, 1080)
        await loginPage.login('manish.pareek@kudosta.com','Kudos123')
        const headerMenu = await $('.lc-container')
        let header = await headerMenu.isDisplayed();
        console.log(header)
        await browser.pause(5000)
    })

    it('Click on header my loghic button ', async  ()=>{
        const myloghicbtn = await $('/html/body/div[12]/div/div[1]/div[2]/ul/li[1]/a')
        await myloghicbtn.click()
        await browser.pause(5000)
       
    })

    it('Verify add portfolio popup woke up and select company ', async () => {
        const addPortfolioBtn = await $('/html/body/div[15]/div/div/div[1]/div/a')
        await addPortfolioBtn.click()
        await browser.pause(5000)
          // Locate the dropdown element
          const dropdown = await $('#select2-popup_market-container');
          // Click on the dropdown to open it
          await dropdown.click();
          // Locate the search input field
          const searchInput = await $('.select2-search__field');
          // Enter the company name to search for
          await searchInput.setValue('AUSTIN METALS LIMITED');
          const companyName = await $('#select2-popup_market-results')
          await companyName.click()

        })  

    it('Verify add portfolio add date ', async () => {

        //const dateInputId = await $('#select-date')
        const inputField = await $('#select-date');
        await browser.execute((input) => {
         input.value = '2024-05-07';
        }, inputField);

    }) 

    it('Verify add portfolio add time ', async () => {
        //const selectTime = await $('#select-time')
        const selectTime = await $('#select-time');
        await selectTime.addValue('01/30AM')

    }) 

    it('Verify add portfolio add share and price  ', async () => {
        const selectShares = await $('#select-shares')
        await selectShares.setValue('04')
        const selectPrice = await $('#select-purchase-price')
        await selectPrice.setValue('01.00')
        const pluseBtn = await $('#lc-addPortfolioList-id')
        await pluseBtn.click()
        await browser.pause(5000)
        const submitBtn = await $('.lc-PortfolioSubmit')
        await submitBtn.click()
        await browser.pause(5000)
        
    }) 

})
