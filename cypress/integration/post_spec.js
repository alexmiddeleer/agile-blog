import posts from '../../posts-meta.js';
describe('The post page', function() {
  it('successfully loads', function() {
    for (let i = 1; i <= posts.length; i++) {
      cy.visit(`/posts/${i}.html`);
      cy.get('h1').should('contain', 'Agile Blog');
    }
  });
  it('has a publish date', function() {
    for (let i = 1; i <= posts.length; i++) {
      cy.visit(`/posts/${i}.html`);
      cy.get('.publishDate').should('contain', posts[i - 1].date);
    }
  });
  it('should have a sidebar', function() {
    for (let i = 1; i <= posts.length; i++) {
      cy.visit(`/posts/${i}.html`);
      cy.get('.sidebar');
    }
  });
});
