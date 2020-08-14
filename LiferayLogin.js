import { Selector } from 'testcafe';

fixture `React Testing`
    .page `http://localhost:8080`;
//path file equivelants
    const signInStart = Selector('a.sign-in');
    const signInButton = Selector('button.btn.btn-primary > span.lfr-btn-label').withText('Sign In');
    const avatar = Selector('span.user-avatar-link');
    const avatarDropdown = Selector('div.dropdown-menu');
    const avatarUserName = Selector('div.dropdown-menu > ul > li');
    const signInQuestion = Selector('#reminderQueryAnswer');
    const  saveButton = Selector('button > span.lfr-btn-label').withText('Save')
//Test case equivelant follows
test('Log In Smoke Test', async t => {
    await t
        .click(signInStart())
        .typeText('#_com_liferay_login_web_portlet_LoginPortlet_login', 'test')
        .typeText('#_com_liferay_login_web_portlet_LoginPortlet_password', 'test')
        .click(signInButton())
        //If first sign-in
        if(await signInQuestion().exists) {
           await t 
                .typeText(signInQuestion(), 'test')
                .click(saveButton());
        }
        //Avatar Element will only be present if you are logged in. 
    await t 
        .click(avatar())
    });

