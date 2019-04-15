import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';
import posts from '../posts-meta.js';

//Returns the URL of the current web page
const getPageUrl = ClientFunction(() => window.location.href);

fixture `Home page`
  .page `http://localhost:3000`;

test('Title exists', async t => {
  await t
    .expect(Selector('h1').innerText).eql('Agile Blog');
});

for (let i = 1; i <= posts.length; i++) {
  test('Links to posts work', async t => {
    await t
      .click(`nav li:nth-child(${i}) a`)
      .expect(getPageUrl()).contains(`${i}.html`, `${i}th link works`);
  });

  test(`${i}th post exists`, async t => {
    await t.navigateTo(`http://localhost:3000/posts/${i}.html`)
      .expect(Selector('h1').innerText).eql('Agile Blog', 'title exists')
      .expect(Selector('article').innerText).ok('Article exists');
  });
}
