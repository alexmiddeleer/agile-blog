import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Home page`// declare the fixture
  .page `http://localhost:3000`;

//then create a test and place your code there
test('Title exists', async t => {
  await t
  // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('h1').innerText).eql('Agile Blog');
});

fixture `First post`// declare the fixture
  .page `http://localhost:3000/posts/1.html`;

//then create a test and place your code there
test('First post exists', async t => {
  await t
  // Use the assertion to check if the actual header text is equal to the expected one
    .expect(Selector('h1').innerText).eql('Agile Blog', 'title exists')
    .expect(Selector('article').innerText).ok('article exists');
});
