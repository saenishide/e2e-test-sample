SuiteOf('スモークテスト');

Scenario('Webサイトを開きログインする', ({ I }) => {
    I.amOnPage('https://e2e-test-sample-production.up.railway.app/')
    I.click('ログインする')
    I.fillField('ユーザー名', 'user1')
    I.fillField('パスワード', 'super-strong-passphrase')
    I.click('ログイン')
    I.see('user1 さん')
});
