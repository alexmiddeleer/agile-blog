import posts from '../../posts-meta.js';

describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('/');
    cy.get('h1').should('contain', 'Agile Blog');
  });

  it('should have a bio', function() {
    cy.visit('/');
    cy.get('.bio');
  });

  it('has working links', function() {
    cy.visit('/');
    for (let i = 1; i <= posts.length; i++) {
      cy.get(`nav li:nth-child(${i}) a`).click();

      cy.url().should('contain', `${i}.html`);
      if (i < posts.length) {
        cy.go('back');
      }
    }
  });
});
