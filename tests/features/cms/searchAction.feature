Feature: Search page Actions

Scenario: The CMS Company Search page supports searching for Users details.
  
    Given I am logged into the CMS application using "adminUser" username and "adminPassword" password
    When I click the "DataManagementMenu" on the "homePage" Page
    And I click the "CompanyManagementMenu" on the "homePage" Page
    And I click the "UsersMenu" on the "homePage" Page
    # Then I verify that the "Users" page is displayed under "companyManagementPage"
    # And I remove the applied filter in screen
    # Then I Verify search link is available 
    # When I navigate to search page
    # Then I Verify "Search Users" page is available
    # # And I click "Clear" button in "SearchUsers"
    # # And I wait for page to load
    # # Then I select "Users" page for entering value
    # And I select "Users" page for entering value from "CompanyManagement"
    # And I select "Company" field for entering value in "SearchUsers" under "companyManagementPage"
    # And I select "First Name" field for entering value in "SearchUsers" under "companyManagementPage"
    # And I select "Last Name" field for entering value in "SearchUsers" under "companyManagementPage"
    # And I select "Email" field for entering value in "SearchUsers" under "companyManagementPage"
    # And I select "Status" DropDown for entering value in "SearchUsers" under "companyManagementPage"
    # And I click "Search" button in "SearchUsers" under "companyManagementPage"
    # And I wait for page to load
    # And I log out from the CMS application