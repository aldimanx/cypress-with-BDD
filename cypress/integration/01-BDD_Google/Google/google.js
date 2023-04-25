
import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'

//Given I open Google page
Given('I open Google page', () => {
  cy.visit(url)
})

//Then I see "Google" in the title "haha"
Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
  cy.log(title)
})

//When I search for "test automation engineer"
Given('I search for {string}', (searchText) => {
  cy.get("textarea[title='Telusuri").type(searchText)
  cy.xpath(`(//div[@aria-label="${searchText}"])[1]`).click({force : true})

})


//When I search for using Scenario Outline and Examples 
When("I search for using Scenario Outline and Examples {string}", (customSearchText) => {
  cy.get("textarea[title='Telusuri']").type(customSearchText)
  cy.get('.FPdoLc > center > .gNO89b').click({force : true})
})




