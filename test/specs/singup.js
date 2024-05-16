describe('Click on creat a new acccount button',() => {

    it('Scroll and click', async ()=>{
    browser.url('https://staging.loghic.com/login.html')
    await browser.setWindowSize(1920, 1080)
    let notAnUser = await $('.lc-not-account')
    await notAnUser.scrollIntoView();
    await notAnUser.click()
    await browser.pause(5000)
})
    it('Click on post and verify the popup without login', async () =>{
       
        await $('.lc-loginPostsPopupBtn').click()
        const withoutLoginPopup = await $('.lc-loginPostsPopup-body')
        await withoutLoginPopup.waitForDisplayed({ setTimeout : 3000})
        await expect(withoutLoginPopup).toHaveTextContaining(["Please Login or Register your account"])
        await browser.pause(5000)
        await $('.lc-loginPostsPopupClose').click()
})
    it('Grap the error',async ()=>{
        await $('.formSubmitBtn').click()
        const catchErrorMessage = await $('#firstname-error')
        await catchErrorMessage.waitForDisplayed({ timeout : 3000})
        await expect(catchErrorMessage).toHaveTextContaining(["This field is required!"])  
})
    it('Create a new account', async ()=>{
        await $('#firstname').setValue('Testing')
        await $('#lastname').setValue('User')
        await $('#emailaddress').setValue('testusa@user.com')  
})

    it('Verify email is already Registered or not', async ()=>{

    
    await $('#firstname').setValue('Testing')
    await $('#lastname').setValue('User')
    await $('#emailaddress').setValue('test@user.com')  
    const setPassword = await $('#new_password')
    const confirmPassword = await $('#confirm_password')
    let sentPassword = 'Kudos123';
    let sentConfirmPassword = 'Kudos123';
    await setPassword.setValue(sentPassword);
    await confirmPassword.setValue(sentConfirmPassword);
    let siteAlertMessage = await $('#show_error_msg')
    await $('.formSubmitBtn').click()
    await expect(siteAlertMessage).toBeDisplayed();
    await expect(siteAlertMessage).toHaveTextContaining('User is already registered with this email.');
   
})
    it('should did not match password and confirm password fields', async ()=>{

    const setPassword = await $('#new_password')
    const confirmPassword = await $('#confirm_password')
    let sentPassword = 'Kudos123';
    let sentConfirmPassword = 'Kudos1243';
    let siteAlertMessage = await $('#siteAlertMessage')
    await setPassword.setValue(sentPassword);
    await confirmPassword.setValue(sentConfirmPassword);
    let errorConfirmPassword = await $('#confirm_password-error')
    await $('.formSubmitBtn').click()
    await expect(siteAlertMessage).not.toBeDisplayed();
    await expect(errorConfirmPassword).toBeDisplayed();
    await expect(errorConfirmPassword).toHaveTextContaining('The password did not match with the new password.');
   
})
    it('Should verify the password vaildetion', async ()=>{

    const setPassword = await $('#new_password')
    const confirmPassword = await $('#confirm_password')
    let sentPassword = 'udos123@#1';
    let sentConfirmPassword = 'Kudos123';
    await setPassword.setValue(sentPassword);
    await confirmPassword.setValue(sentConfirmPassword);
    let newPasswordError = await $('#new_password-error')
    //let errorConfirmPassword = await $('#confirm_password-error')
    await $('.formSubmitBtn').click()
    await expect(newPasswordError).toBeDisplayed();
    //await expect(errorConfirmPassword).not.toBeDisplayed();
    await expect(newPasswordError).toHaveTextContaining('Password must be at least 8 characters long and include at least 1 uppercase letter, 1 lowercase letter, 1 digit');
   
})

    it('should match password and confirm password fields', async ()=>{

        await $('#firstname').setValue('Testing')
        await $('#lastname').setValue('User')
        await $('#emailaddress').setValue('testusawwe@user.com')  

        const setPassword = await $('#new_password')
        const confirmPassword = await $('#confirm_password')
        let sentPassword = 'Kudos123';
        let sentConfirmPassword = 'Kudos123';
        await setPassword.setValue(sentPassword);
        await confirmPassword.setValue(sentConfirmPassword);
        let siteAlertMessage = await $('#siteAlertMessage')
        let errorConfirmPassword = await $('#confirm_password-error')
        let submitBtn = await $('.formSubmitBtn')
        await submitBtn.click()
        await expect(siteAlertMessage).toBeDisplayed();
        await expect(errorConfirmPassword).not.toBeDisplayed();
        await expect(siteAlertMessage).toHaveTextContaining('Congratulations! Your account has been successfully created');
        //await siteAlertMessage.saveScreenshot('./sss.png')
       
    })

        it('Select Gender', async ()=>{
        const genderDropdown = await $('.lc-radio-group');
        const genderValue = 'Female'; 
        switch (genderValue) {
        case 'female':
        await genderDropdown.selectByAttribute('value', 'female');
        break;
        case 'male':
        await  genderDropdown.selectByAttribute('value', 'male');
        break;
        case 'custom':
        await  genderDropdown.selectByAttribute('value', 'custom');
        break;
        default:
        console.error('Invalid gender value');
        await browser.pause(5000)
    }

    })

})