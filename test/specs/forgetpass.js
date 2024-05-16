describe('Forget password',() => {

    it('Forget password', async ()=>{

    browser.url('https://staging.loghic.com/login.html')
    await $('.lc-fgpassword').click()
    let forgetPassword = await $('#resetPassword_email_input')
    await forgetPassword.waitForDisplayed({ timeout : 3000})
    await forgetPassword.setValue('manish.pareek@kudosta.com')
    await $('.logInBtn').click()
    let siteAlertMessage = await $('#siteAlertMessage')
    await siteAlertMessage.waitForDisplayed({ timeout : 3000})
    await siteAlertMessage.getText()
    await expect(siteAlertMessage).toHaveTextContaining(["We have successfully sent a password reset link to your registered email address."])
    })
    
    it('Grap the error with empty filed ', async () =>{
        await $('.logInBtn').click()
        let errorMessage = await $('#show_error_msg1')
        await errorMessage.waitForDisplayed({ timeout : 5000})
        await expect(errorMessage).toHaveTextContaining(["Email is missing."])

    })

    it('Grap the error with invaild email formet ', async () =>{
        let forgetPassword = await $('#resetPassword_email_input')
        await forgetPassword.waitForDisplayed({ timeout : 3000})
        await forgetPassword.setValue('manish.pareek')
        await $('.logInBtn').click()
        let errorMessage = await $('#show_error_msg1')
        await errorMessage.waitForDisplayed({ timeout : 5000})
        await expect(errorMessage).toHaveTextContaining(["Please Enter Your Registered Email Address."])

    })
    

})