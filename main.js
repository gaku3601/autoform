// 参考文献[ここ見て書いてく]
// https://qiita.com/rh_taro/items/32bb6851303cbc613124<Paste>
const puppeteer = require('puppeteer');


// お部屋探しネット
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://www.takuto-net.com/contact/booking/');
  // form入力
  await page.select('select[name="visit_month1"]', "1");
  await page.select('select[name="visit_day1"]', "1");
  await page.select('select[name="visit_hour1"]', "9:00～");
  await page.select('select[name="visit_month2"]', "2");
  await page.select('select[name="visit_day2"]', "1");
  await page.select('select[name="visit_hour2"]', "9:00～");
  await page.type("#name", "テスト太郎");
  await page.type("#name_kana", "てすとたろう");
  await page.type("#email", "pro.gaku@gmail.com");
  await page.type("#tel", "09012345678");
  await page.type('textarea[name="other_condition"]', "これはテストです。経営推進本部から送信しています。");
  page.click('div.imgBox03');
  await page.waitFor(3000);
  // page.click('div.imgBox03'); // 送信
  await page.waitFor(3000);
  // await browser.close();
})();

// T'sカレッジ近大
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://www.takuto-dormitory.com/kindai/inquiry');
  // form入力
  await page.waitFor(5000);
  await page.select('select[name="内容"]', "ご質問");
  page.click('input[type="radio"][name="送信者様"][value=" ご本人様"]');
  await page.type('input[name="お名前（姓）"]', "テスト");
  await page.type('input[name="お名前（名）"]', "太郎");
  await page.type('input[name="フリガナ（姓）"]', "テスト");
  await page.type('input[name="フリガナ（名）"]', "タロウ");
  await page.type('input[name="zip1"]', "123");
  await page.type('input[name="zip2"]', "4567");
  await page.type('input[name="address2"]', "テスト市");
  await page.type('input[name="strt"]', "テスト番地");
  await page.type('input[name="ご連絡先電話番号[data][0]"]', "090");
  await page.type('input[name="ご連絡先電話番号[data][1]"]', "1234");
  await page.type('input[name="ご連絡先電話番号[data][2]"]', "5678");
  await page.type('input[name="メールアドレス"]', "pro.gaku@gmail.com");
  await page.type('input[name="確認用メールアドレス"]', "pro.gaku@gmail.com");
  await page.type('input[name="第1志望校"]', "テスト学部");
  await page.type('textarea[name="お問い合わせ内容"]', "テストです。経営推進本部から送信しています。");
  page.click('input[name="submitConfirm"]');
  await page.waitFor(10000);
  // page.click('input[name="mwform_submitButton-344"]'); //送信
  await page.waitFor(10000);
  // await browser.close();
})();
