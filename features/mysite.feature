Feature: My Site
  As a visitor of my website
  I want to see Joey's name
  So that I know who's website I'm on

  Background:
    Given I am on Joey's portfolio

  Scenario: Viewing the homepage
    Then I should see the name "Joseph Tongay"

  Scenario: Viewing the power ranking project
    When I click on the project titled "power-img"
    Then I should see the title "Power Ranking"

  Scenario: Viewing the raspberry pi project
    When I click on the project titled "raspi-img"
    Then I should see the title "Raspberry Pi Smart TV"
