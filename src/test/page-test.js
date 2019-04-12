import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
  .page `http://localhost:3000`


//then create a test and place your code there
test('My first test', async t => {
    await t
        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('h1').innerText).eql('Agile Blog');
});
