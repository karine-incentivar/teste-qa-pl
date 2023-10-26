/// <reference types="cypress" />

describe('Register', () => {
  before(() => {
    visit("https://form-agilizei.netlify.app/");
  })

  it('Sign in', () => {
    cy.get("input[name=firstName]").type("Marta");
    cy.get("input[name=lastName]").type("da Silva");
    cy.get("textarea[name=adress]").type("Rua coberta - Gramado/RS");
    cy.get("input[type=email").type("marta@mailinator.com");

    click(get("input[value=f]"));

    cy.get(".checkHobbies").check('Netflix');
    cy.get(".checkHobbies").check('Livros');

    cy.get('select#countries').select('Dinamarca', { force:true });
    cy.get('select#years').select('2006', { force:true });
    cy.get('select#months').select('Janeiro', { force:true });
    cy.get('select#days').select('8', { force:true });

    cy.get('input#firstpassword').type('Psswrd@2021');
    cy.get('input#secondpassword').type('Psswrd@2021');
  
    contains(click('Finalizar cadastro'));

    cy.get("#section < h2").expect("have.title", "Listagem");
  })
 
})
