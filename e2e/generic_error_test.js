SuiteOf('Generic Error Test');

Scenario('リンク切れページにアクセス', ({ I }) => {
    I.amOnPage('/undefined')
    I.see('お探しのページは見つかりませんでした')
    I.see('商品一覧へ戻る')
    I.click('商品一覧へ戻る')
    I.seeInTitle('商品一覧')
})