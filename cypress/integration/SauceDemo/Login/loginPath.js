import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../../../pages/loginPage";

let loginpage = new loginPage();

Given("user visit website", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("user input username {string}", (test) => {
  loginpage.InputUsername().type(test);
});

And("user input password", () => {
  loginpage.inputPassword().type("secret_sauce");
});

And("user click submit button", () => {
  loginpage.LoginButton().click();
});

Then("user see logo exist", () => {
  cy.get(".app_logo").should("exist");
});

Then("user see error message", () => {
  loginpage
    .ErrorMessage()
    .should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
});

//   it('002 login with invalid password', () => {
//     loginpage.InputUsername()
//         .type("standard_user")
//     loginpage.inputPassword()
//         .type("randompass")
//     loginpage.LoginButton()
//         .click()
//     loginpage.ErrorMessage()
//         .should('have.text','Epic sadface: Username and password do not match any user in this service')
//   })
//   it('003 login with locked account', () => {
//     loginpage.InputUsername()
//         .type("locked_out_user")
//     loginpage.inputPassword()
//         .type("secret_sauce")
//     loginpage.LoginButton()
//         .click()
//     loginpage.ErrorMessage()
//         .should('have.text','Epic sadface: Sorry, this user has been locked out.')
//   })
