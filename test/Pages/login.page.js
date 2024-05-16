class LoginPage{

    get emailTextbox(){

        return $('#emailaddress')
    }

    get passwordTextbox() {

        return $('#password')
    }

    get loginButton(){
        return $('.lc-full_width_button')
    }
     async login(email, passcode){

        await this.emailTextbox.setValue(email)
        await this.passwordTextbox.setValue(passcode)
        await this.loginButton.click()
        //const elem = await $('#someElem');
        //await loginButton.saveScreenshot('../Loghic Automation/screenshots/loginButton.png');
      
     }
}
 export default new LoginPage()