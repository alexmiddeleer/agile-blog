import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

//Returns the URL of the current web page
const getPageUrl = ClientFunction(() => window.location.href);

fixture `Home page`// declare the fixture
  .page `http://localhost:3000`;

test('Title exists', async t => {
  await t
    .expect(Selector('h1').innerText).eql('Agile Blog');
});

test('Links to posts work', async t => {
  await t
    // .expect(Selector('nav').innerText).ok('nav exists with content');
    .click('nav a')
    .expect(getPageUrl()).contains('1.html');
});

fixture `First post`// declare the fixture
  .page `http://localhost:3000/posts/1.html`;

test('First post exists', async t => {
  await t
    .expect(Selector('h1').innerText).eql('Agile Blog', 'title exists')
    .expect(Selector('article').innerText).ok('article exists');
});

fixture `Second post`// declare the fixture
  .page `http://localhost:3000/posts/2.html`;

test('second post exists', async t => {
  await t
    .expect(Selector('h1').innerText).eql('Agile Blog', 'title exists')
    .expect(Selector('article').innerText).ok('article exists');
});

fixture `Third post`// declare the fixture
  .page `http://localhost:3000/posts/3.html`;

//then create a test and place your code there
test('third post exists', async t => {
  await t
  // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('h1').innerText).eql('Agile Blog', 'title exists')
    .expect(Selector('article').innerText).ok('article exists');
});
