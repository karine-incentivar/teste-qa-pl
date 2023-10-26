/// <reference types="cypress" />

import faker from 'faker-br';
import SignUp from '../support/pages/sign-up';

  describe('Login', () => {
    before(() => {
      cy.visit("/login");
      SignUp.createNewUser(faker.name.firstName(), faker.internet.email(), faker.internet.password());
    });

    it('CT 1', () => {

    })
  
  });