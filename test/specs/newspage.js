import loginPage from '../Pages/login.page.js';
describe('News page test cases and verifiction', () =>{

    it('Login successfull', async  ()=>{
        browser.url('https://staging.loghic.com/login.html');
        await browser.setWindowSize(1920, 1080)
        await loginPage.login('manish.pareek@kudosta.com','Kudos123')
        const headerMenu = await $('.lc-container')
        let header = await headerMenu.isDisplayed();
        console.log(header)
    })

    it('Verify post submit container header text', async ()=>{

        const postCardTabs = await $('.lc-createPost-tabs');
        await browser.pause(3000)
        let outerHTML = await postCardTabs.getText();
        console.log(outerHTML)
        const expectedLines = [
            'Make Post',
            'Photo or Video Album',
            'Live Video'];
        expectedLines.forEach(line => {
        expect(outerHTML).toContain(line);
    })
})

it('Verify Submit Post Banner', async () => {
        const verifyProfileImage = await $('#leftNavUser_image')
        let imageLink = await verifyProfileImage.getProperty('src')
        console.log(imageLink)
        const postIsClick = await $('.lc-launchPost')
        await expect(postIsClick).toHaveTextContaining("What's on your mind ?")
        await postIsClick.click()
        await browser.pause(5000)
        
   }) 

   it('Verify Submit Post popup image and name', async () => {
    const profileImagendName = await $('.thisUserProfile_image')
    let image = await profileImagendName.getProperty('src')
    const userName = await $('.thisUserProfile_name')
    console.log('User Image :  ' ,image)
    let thisUserName = await userName.getText()
    console.log('User name :  ', thisUserName)
})
it('Submit post without content', async ()=>{
    const submitPostbtn = await $('.saveEventBtn')
    await submitPostbtn.click()
    const postSuccessmsgError = await $('#siteAlertMessage')
    await expect(postSuccessmsgError).toHaveTextContaining('Invalid Content')
    //await postSuccessmsg.toBeDisplayed()
})


it('Verify Bold Itlic Underline Dropdown ', async () => {

    const textChange = await $('.addPostNewseditorButtonSection')
    let bold = await textChange.getProperty('onclick')
    console.log('text bold cate  ' ,  bold)
    await $('/html/body/div[9]/div/div[2]/div[1]/button[1]/i').click()
    
})

it('Verify Submit Post popup set data in fields', async () => {
    const postTitle = await $('#commentPostPopup_post_title')
    //await expect(postTitle).toHaveTextContaining('Title')
    await postTitle.setValue("Automated create post testing ")
    await browser.pause(5000)
    const postDiscription = await $('#postNewseditor')
    await postDiscription.setValue("Shared by testing Automated share post")

   })

   it('Verify Submit Post Upload media file ', async () => {
    const uploadButton = $('#drag_zone_upload_select_image_button');

    // Trigger a click event on the button to open the file dialog
    uploadButton.click();

    // Set the path to the media file to be uploaded
    const filePath = './Loghicautomation/images/download.jpg'; // Replace with the actual file path

    // Upload the media file by executing JavaScript to set the file input value
    browser.execute((fileInputId, filePath) => {
        // Get the file input element by ID
        const fileInput = document.getElementById(fileInputId);
        // Set the value of the file input to the file path
        fileInput.addValue = filePath;
        // Dispatch a change event to trigger the upload process
        fileInput.dispatchEvent(new Event('change', { bubbles: true }));
    }, 'selectFile_UserPostImage', filePath);
    await browser.pause(5000)

    // Wait for the progress bar to appear
   // const progressBar = $('#progressBar_UserPost');
  //  progressBar.waitForDisplayed();

    // Optionally, you can verify that the progress bar is visible
    //expect(progressBar.isDisplayed()).toBe(true);

    // You can add further verification if needed
   })

   it('Select Post category', async () => {

    const postCategory = await $('#commentPostPopup_post_category')
    const postCategoryValue = 'Capital Goods'; 
        switch (postCategoryValue) {
        case 'Banks':
        await postCategory.selectByAttribute('value', 'Banks');
        break;
        case 'Capital Goods':
        await  postCategory.selectByAttribute('value', 'Capital Goods');
        break;
        case 'Commercial & Professional Services':
        await  postCategory.selectByAttribute('value', 'Commercial & Professional Services');
        break;
        case 'Diversified Financials':
        await postCategory.selectByAttribute('value', 'Diversified Financials');
        break;
        case 'Energy':
        await  postCategory.selectByAttribute('value', 'Energy');
        break;
        case 'Food & Staples Retailing':
        await  postCategory.selectByAttribute('value', 'Food & Staples Retailing');
        break;
        case 'Health Care Equipment & Services':
        await  postCategory.selectByAttribute('value', 'Health Care Equipment & Services');
        break;
        case 'Insurance':
        await postCategory.selectByAttribute('value', 'Insurance');
        break;
        case 'Materials':
        await  postCategory.selectByAttribute('value', 'Materials');
        break;
        case 'Media & Entertainment':
        await  postCategory.selectByAttribute('value', 'Media & Entertainment');
        break;
        case 'Pharmaceuticals, Biotechnology & Life Sciences':
            await postCategory.selectByAttribute('value', 'Pharmaceuticals, Biotechnology & Life Sciences');
            break;
            case 'Real Estate':
            await  postCategory.selectByAttribute('value', 'Real Estate');
            break;
            case 'Software & Services':
            await  postCategory.selectByAttribute('value', 'Software & Services');
            break;
            case 'Technology Hardware & Equipment':
            await  postCategory.selectByAttribute('value', 'Technology Hardware & Equipment');
            break;
            case 'Telecommunication Services':
            await postCategory.selectByAttribute('value', 'Telecommunication Services');
            break;
            case 'Transportation':
            await  postCategory.selectByAttribute('value', 'Transportation');
            break;
            case 'Utilities':
            await  postCategory.selectByAttribute('value', 'Utilities');
            break;
        default:
        await browser.pause(5000)
    }

   })

   it('Primium post check box', async ()=>{
    await $('#commentPostPopup_post_visibility').click()
    await browser.pause(3000)

   })
it('Submit a post', async () =>{
    const submitPostbtn = await $('.saveEventBtn')
    await submitPostbtn.click()
    const postSuccessmsg = await $('#siteAlertMessage')
    await expect(postSuccessmsg).toHaveTextContaining('Your post has been successfully shared.')
    //await postSuccessmsg.toBeDisplayed()

})


})

// ---------------------------------------------- Post Card Verify -----------------------------------

describe('Post card verify', () => {

    it('verify card user image and name', async ()=>{
        
        //const cardHeader = await $('.lc-postCardHeader')
        const postCards = $$('.lc-postCard');

        // Iterate through each post card
        postCards.forEach((postCard) => {
            // Extract post data from the post card
            const userImage = postCard.$('.lc-avatarCricle').getAttribute('src');
            const userName = postCard.$('.lc-cardTitle').getText();
            const postTime = postCard.$('.news_post_time_string').getText();
            const postContentContent = postCard.$('.lc-postCard-title').getText();
            const postContentTitle = postCard.$('.lc-postCard-title').getText();
            const postMedia = postCard.$('.lc-postCardImg').getAttribute('src');
            // Extract more data as needed...

            // Verify post data
            expect(userImage).not.toBeUndefined();
            expect(userName).not.toBeUndefined();
            expect(postContentContent).not.toBeUndefined();
            expect(postTime).not.toBeUndefined();
            expect(postContentTitle).not.toBeUndefined();
            // Verify media if present
            if (postMedia) {
                expect(postMedia).not.toBeUndefined();
            }
          
    })
})
// it('should scroll to a specific element', () => {
//     // Navigate to the page
//     browser.url('your_page_url');

//     // Scroll to a specific element
//     const element = $('#element-to-scroll-to');
//     element.scrollIntoView();

//     // Verify that the element is now visible
//     expect(element.isDisplayed()).toBe(true);
// });

it('should scroll to a specific position', async () => {
    // Navigate to the page
//  await browser.url('https://staging.loghic.com/?page=news');

    // Scroll to a specific position
    await browser.execute(function() {
      window.scrollTo(0, 160); // Scroll to vertical position 500
    });

    // Verify the page scroll position
    const scrollY = await browser.execute(function() {
        return window.scrollY;
    });
    await expect(scrollY).toBe(160);
});
})