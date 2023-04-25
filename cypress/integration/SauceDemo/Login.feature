Feature: login feature

  Background: user at webpage
    Given user visit website

  Scenario Outline: i want to login with correct user
    When user input username "<CorrectUser>"
    And user input password
    And user click submit button
    Then user see logo exist

    Examples:
      | CorrectUser             |
      | standard_user           |
      | problem_user            |
      | performance_glitch_user |

  Scenario: i want to login with incorrect user
    When user input username "asalasalan"
    And user input password
    And user click submit button
    Then user see error message
