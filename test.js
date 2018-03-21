import { Selector } from 'testcafe';

fixture `Hello, OSS.`
    .page `http://ossdev.cartenz.co.id/auth/login`;

test('OSS - Login', async t => {
    await t
    	.maximizeWindow()

    	// Login
        .typeText('#email2', 'helpdesk3@mailinator.com')
        .typeText('#test1', '111111')
        .click('.btn.btn-block.btn-success.uppercase.rnd')

        // Sidemenu > Data Pengaduan
        .click('.nav-item.start.complaint-nav')

        // Data Pengaduan > Buat Pengaduan Baru
        .click('.btn.green.pull-right.btn_color')

        // Identitas > No Handphone
        .typeText('#input-identity_phone_2', '1234567890')
        
        // Identitas > Email
        .typeText('#input-identity-email', ' ')
        
        // Informasi Detail > Kategori
        .click('#select2-select-category-container')
        .typeText('.select2-search.select2-search--dropdown', 'Perizinan')
        .click('.select2-results__option.select2-results__option--highlighted')

        // Informasi Detail > Isu Utama
        .click('#select2-jenis-pengaduan-container')
        .typeText('.select2-search.select2-search--dropdown', 'Hukum')
        .click('.select2-results__option.select2-results__option--highlighted')

        // Informasi Detail > Uraian
        .typeText('#input-complaint-description', 'ini adalah isi dari deskripsi nya ya..')
});