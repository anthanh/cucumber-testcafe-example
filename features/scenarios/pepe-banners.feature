@JIRA-PEPE-568
Feature: pepehone-bdd-example
    Can checkout to main banner offer

  Scenario Outline: Can select banner offers (<hiptest-uid>)
    Given go to pepe home
    When clicks on "<banner-type>"
    Then checkout is visible

    Examples:
      | banner-type | hiptest-uid |
      | main-banner |  |
      | offer-banner |  |
