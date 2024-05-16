import loginPage from '../Pages/login.page.js';
describe('Login functionality', () => {
    it('All fields empty', async () => {
        browser.url('https://staging.loghic.com/login.html');
        var loginButton =  await $('.lc-full_width_button')
        //Start the grap the error test case 1
              await loginButton.waitForDisplayed({ timeout : 5000})
              await loginButton.click()
              var printErrorMessage = await $('#show_error_msg')
              await printErrorMessage.waitForDisplayed({ timeout : 3000})
              await expect(printErrorMessage).toHaveTextContaining(['Please fill out this field'])
    });

    it('Login with vaild email and in vaild password and grap the error', async  ()=>{
        browser.url('https://staging.loghic.com/login.html');
           var setEmailAddress = await $('#emailaddress')
           var setPassword = await $('#password')
           let catchError = await $('#show_error_msg')
           var loginButton =  await $('.lc-full_width_button')
          await setEmailAddress.setValue('Manish.pareek@kudosta.com')
           await setPassword.setValue('Kudos321')
           await loginButton.click()
           await catchError.waitForDisplayed({ timeout : 5000})
           await expect(catchError).toHaveTextContaining(["Your email and password didn't match."])

})
    it('Login successfull', async  ()=>{
    browser.url('https://staging.loghic.com/login.html');
    await loginPage.login('manish.pareek@kudosta.com','Kudos123')

})
})
