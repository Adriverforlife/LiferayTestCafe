import { Selector } from 'testcafe';

fixture `React Testing`
    .page `https://i9ocu.csb.app/`;
//path file equivelants
    const hackButton = Selector('button.HackButton');
    const text = Selector('button.HackButton').innerText;
    const signInButton = Selector('button.btn.btn-primary > span.lfr-btn-label').withText('Sign In');
    const avatar = Selector('span.user-avatar-link');
    const avatarDropdown = Selector('div.dropdown-menu');
    const avatarUserName = Selector('div.dropdown-menu > ul > li');
    const signInQuestion = Selector('#reminderQueryAnswer');
    const  saveButton = Selector('button > span.lfr-btn-label').withText('Save')
//Test case equivelant follows
test('React Initial Test', async t => {
    await t
        .click(hackButton())
    console.log(await hackButton().innerText)
    await t
        .click(hackButton())
    console.log(await hackButton().innerText)

    });

