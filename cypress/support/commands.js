Cypress.Commands.add('signUp', (name, email, password) => {
  cy.get("input[data-qa=signup-name]").type(name);
  cy.get("input[data-qa=signup-email]").type(email);

  cy.get("button[data-qa=signup-button]").click();
  cy.accountInformation(name, password);
})

Cypress.Commands.add("accountInformation", (name, password) => {
  cy.get("#id_gender1").click();
  cy.get("#name").type(name);
  
  cy.get("#password").type(password);
  cy.get("#days").select("1");
  cy.get("#months").select("4");
  cy.get("#years").select("1997");

  cy.get("#first_name").type("Sonia");
  cy.get("#last_name").type("Silva");
  cy.get("#company").type("teste");
  cy.get("#address1").type("Rua treze");

  cy.get("#country").select("United States");
  cy.get("#state").type("California");
  cy.get("#city").type("Sacramento");
  cy.get("#zipcode").type("94203");
  cy.get("#mobile_number").type("55555");

  cy.get("[data-qa=create-account]").click();
})