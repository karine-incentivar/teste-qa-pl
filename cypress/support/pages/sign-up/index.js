const el = require('./elements').ELEMENTS;

import faker from 'faker-br';

class SignUp {
  createNewUser(name, email, password) {
    cy.get(el.inputSignupName).type(name);
    cy.get(el.inputEmail).type(email);

    cy.get(el.buttonSignUp).click();
    this.accountInformation(name, password);
  }

  accountInformation(name, password) {
    cy.get(el.inputGender).click();
    cy.get(el.inputName).type(name);
    
    cy.get(el.inputPassword).type(password);
    cy.get(el.selectDay).select("1");
    cy.get(el.selectMonth).select("4");
    cy.get(el.selectYears).select("1997");
  
    cy.get(el.inputFirtstName).type(name);
    cy.get(el.inputLastName).type(faker.name.lastName());
    cy.get(el.inputCompany).type("teste");
    cy.get(el.inputAddress).type(faker.address.streetName());
  
    cy.get(el.selectCountry).select("United States");
    cy.get(el.inputState).type(faker.address.state());
    cy.get(el.inputCity).type(faker.address.city());
    cy.get(el.inputZipCode).type(faker.address.zipCode());
    cy.get(el.inputMobileNumber).type(faker.phone.phoneNumber());
  
    cy.get(el.buttonCreateAccount).click();
  }
}

export default new SignUp();