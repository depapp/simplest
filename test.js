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
        
        // Expect : Nama Logged in User        
        .expect(Selector('.username.username-hide-on-mobile').innerText).eql('Helpdesk 3')

        // Sidemenu > Data Pengaduan
        .click('.nav-item.start.complaint-nav')

        // Data Pengaduan > Buat Pengaduan Baru
        .click('.btn.green.pull-right.btn_color')

        // Identitas > No Handphone
        .typeText('#input-identity_phone_2', '1234567890')
        
        // Identitas > Email
        .typeText('#input-identity-email', ' ')

        // Expect : Nama Pelapor
        // eql='' karena field ybs 'readonly', ketika memasukan value nya, gk ketemu
        .expect(Selector('#input-identity-name').innerText).eql('')
        
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

        // Informasi Detail > Kronologi
        .typeText('#input-complaint-chronology', 'ya kronologi nya seperti itu..')

        // Informasi Detail > Upload
        .click('#btn-unggah')
        .setFilesToUpload('#attachmentFiles', [
                    'a.jpeg',
                    'b.jpg',
                    'c.jpg'
                ])
        .click('.btn.dark.btn-actions.pull-right')

        // Informasi Detail > Penanam Modal
        .click('#select2-select-source-of-funds-container')
        .typeText('.select2-search.select2-search--dropdown', 'PMDN')
        .click('.select2-results__option.select2-results__option--highlighted')

        // Informasi Detail > Lokasi Usaha
        .click('#select2-select-location-container')
        .typeText('.select2-search.select2-search--dropdown', 'Cianjur')
        .click('.select2-results__option.select2-results__option--highlighted')

        // Informasi Detail > Nama Perusahaan
        .typeText('#input-company-name', 'PT TestCafe')

        // Informasi Detail > Jenis Usaha
        .click('#select2-select-business-type-container')
        .typeText('.select2-search.select2-search--dropdown', 'Hukum')
        .click('.select2-results__option.select2-results__option--highlighted')

        // Informasi Detail > Sumber Informasi
        .click('#select2-select-information-source-container')
        .typeText('.select2-search.select2-search--dropdown', 'Call')
        .click('.select2-results__option.select2-results__option--highlighted')

        // Tujuan Pengaduan > Draf
        .click('.TriSea-technologies-Switch.pull-right')
        // .typeText('#input-comment', 'ini adalah komentar')

        .click('#select2-select-leading-sector-container')
        .typeText('.select2-search.select2-search--dropdown', 'Cianjur')
        .click('.select2-results__option.select2-results__option--highlighted')
        
        // Rincian Pengaduan
        // IDK it's works or not
        // .typeText('#form-complaint-detail', 'ini adalah isi dari Rincian Pengaduan..')

        // Kirim
        .click('#form-submit')
});