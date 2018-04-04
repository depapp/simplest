import { Selector } from 'testcafe';

fixture `Hello, OSS.`
    .page `http://devtaxpayer.cartenzgroup.com/revenue/taxpayeraccount/`;

test('OSS - Login', async t => {

    await t
    	.maximizeWindow()

    	.click('.t-login')
		.typeText('#userid_field', 'fauzan.abdul@cartenz.co.id')
		.typeText('#password_field', '1234567890')
		.click('#login_button')
});