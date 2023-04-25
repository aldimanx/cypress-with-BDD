Feature: Google Main Page

  I want to open a search engine

  Background: Background name
   
  @regression @smoke
  Scenario: Opening a search engine page
    Given I open Google page

  @regression @bvt 
  Scenario: Opening a search engine page for search text
    Given I open Google page
    Then I see "Google" in the title
    When I search for "test automation engineer"
    Then I see "test automation engineer" in the title

#  @regression @focus
#   Scenario: Opening a search engine page for search text -> title validation
#     Given I open Google page
#     Then I see "Google" in the title
#     When I search for using DataTable
#       | Automation Testing using Cypress |
#     Then I see "Automation Testing using Cypress" in the title

  @regression @sanity
  Scenario Outline: Opening a search engine page for search text -> title validation -> Scenario Outline with Examples <CustomSearchText>
    Given I open Google page
    Then I see "Google" in the title
#   When I search for "Automation Testing using Cypress"
    When I search for using Scenario Outline and Examples "<CustomSearchText>"
    
    Examples:
      | CustomSearchText |
      | Selenium         |
      | Appium           |
      | RestAssured      |
      | Cypress          |
      

