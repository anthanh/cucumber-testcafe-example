Feature: As a user I want to search thins on google

    Scenario: A user search content by text
        Given a google homepage
        When user type "cats"
        Then return content related to term

    Scenario: A user search images by text
        Given a google homepage
        And user type "cats"
        When clicks on content type "Images"
        Then return images related to term
