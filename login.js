import { Selector } from 'testcafe';

fixture `Hello, OSS.`
    .page `http://ossdev.cartenz.co.id/auth/login`;

test('OSS - Login', async t => {

    await t
    	.maximizeWindow()

    	// Login
        .typeText('#email2', 'helpdesk3@mailinator.com')
        .typeText('#test1', '11111')
        .click('.btn.btn-block.btn-success.uppercase.rnd')
        
        // Expect : Password Salah
        .expect(Selector('#error-msg').innerText).eql('Password salah')
});