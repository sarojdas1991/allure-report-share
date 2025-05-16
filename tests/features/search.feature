Feature: Search Menu Actions

# ##------------Company Management----------------

# # application name page name functionality description
#   Scenario: The CMS Company Search page supports searching for company details.
  
#     Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "CompanyManagementMenu" on the "homePage" Page
#     And I click the "CompaniesMenu" on the "homePage" Page
#     Then I verify that the "Companies" page is displayed under "companyManagementPage"
#     And I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Companies" page is available
#     And I log out from the CMS application

Scenario: The CMS Company Search page supports searching for Users details.
  
    Given I am logged into the CMS application using "adminUser" username and "adminPassword" password
    When I click the "DataManagementMenu" on the "homePage" Page
    And I click the "CompanyManagementMenu" on the "homePage" Page
    And I click the "UsersMenu" on the "homePage" Page
    Then I verify that the "Users" page is displayed under "companyManagementPage"
    Then I Verify search link is available 
    When I navigate to search page
    Then I Verify "Search Users" page is available
    And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching for Roles details.
  
#     Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "CompanyManagementMenu" on the "homePage" Page
#     And I click the "RolesMenu" on the "homePage" Page
#     Then I verify that the "Roles" page is displayed under "companyManagementPage" 
#     When I navigate to search page
#     Then I Verify "Search Roles" page is available
#     And I log out from the CMS application

    
# Scenario: The CMS Company Search page supports searching for Search Paired Move FTP Settings details.
  
#      Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "CompanyManagementMenu" on the "homePage" Page
#     And I click the "PairedMoveFTPSettingsMenu" on the "homePage" Page
#     Then I verify that the "PairedMoveFTPSettings" page is displayed under "companyManagementPage" 
#     Then I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Paired Move FTP Settings" page is available
#     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Outbound EDI 301 FTP Settings details.
  
#     Given I am logged into the CMS application
#    When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "CompanyManagementMenu" on the "homePage" Page
#     And I click the "OutboundEDI301FTPSettingsMenu" on the "homePage" Page
#     Then I verify that the "OutboundEDI301FTPSettings" page is displayed under "companyManagementPage"
#     Then I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Outbound EDI 301 FTP Settings" page is available
#     And I log out from the CMS application




# # ###------------------Pool Management---------

# Scenario: The CMS Company Search page supports searching Pools details.
  
#     Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "PoolManagementMenu" on the "homePage" Page
#     And I click the "PoolsMenu" on the "homePage" Page
#     Then I verify that the "Pools" page is displayed under "poolManagementPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search Pools" page is available
# #     And I log out from the CMS application

# # Scenario: The CMS Company Search page supports searching ExtLocations details.
  
    # Given I am logged into the CMS application
    # When I click the "DataManagementMenu" on the "homePage" Page
    # And I click the "PoolManagementMenu" on the "homePage" Page
    # And I click the "ExtLocationsMenu" on the "homePage" Page
    # Then I verify that the "ExtLocations" page is displayed under "poolManagementPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search Ext-Locations" page is available
# #     And I log out from the CMS application

# # Scenario: The CMS Company Search page supports searching Exception ExtLocations details.
  
    # Given I am logged into the CMS application
    # When I click the "DataManagementMenu" on the "homePage" Page
    # And I click the "PoolManagementMenu" on the "homePage" Page
    # And I click the "ExceptionExtLocationsMenu" on the "homePage" Page
    # Then I verify that the "ExceptionExtLocations" page is displayed under "poolManagementPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search Exception Ext-Locations" page is available
# #     And I log out from the CMS application





# # # ##------------------Unit Management---------

# Scenario: The CMS Company Search page supports searching Units details.
  
#     Given I am logged into the CMS application
#     When I click the "DataManagementMenu" on the "homePage" Page
#     And I click the "UnitManagementMenu" on the "homePage" Page
#     And I click the "UnitsMenu" on the "homePage" Page
#     Then I verify that the "Units" page is displayed under "unitManagementPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search Units" page is available
# #     And I log out from the CMS application



# # ##--------------------Tracking-------------------------

# ##--------------------EDI-------------------------

# Scenario: The CMS Company Search page supports searching Search EDI File Processing details.
  
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#     And I click the "EDIMenu" on the "homePage" Page
#     And I click the "EDIFileProcessingMenu" on the "homePage" Page
#     Then I Verify "Search EDI File Processing" page is available
#     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Search Sent File Queue details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#     And I click the "EDIMenu" on the "homePage" Page
#     And I click the "SentFileQueueMenu" on the "homePage" Page
#     Then I verify that the "SentFileQueue" page is displayed under "ediPage"
#     Then I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Sent File Queue" page is available
#     And I log out from the CMS application

# # #-----------------------HaulageData------------------------------

# Scenario: The CMS Company Search page supports searching Default OC Haulage Type details.
  
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#     And I click the "HaulageDataMenu" on the "homePage" Page
#     And I click the "DefaultOcHaulageTypeMenu" on the "homePage" Page
#     Then I verify that the "DefaultOCHaulageType" page is displayed under "haulageDataPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search Default OC Haulage Type" page is available
# #     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Default OC Haulage Type details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "HaulageDataMenu" on the "homePage" Page
#     And I click the "HaulageDataFlatFileMenu" on the "homePage" Page
#     Then I verify that the "HaulageDataFlatFile" page is displayed under "haulageDataPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search Haulage Data - Flat File" page is available
# #     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Haulage Data Standard details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "HaulageDataMenu" on the "homePage" Page
#     And I click the "HaulageDataStandardMenu" on the "homePage" Page
#     Then I verify that the "HaulageDataStandard" page is displayed under "haulageDataPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search Haulage Data - Standard" page is available
# #     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "HaulageDataMenu" on the "homePage" Page
#     And I click the "HaulageData301Menu" on the "homePage" Page
#     Then I verify that the "HaulageData301" page is displayed under "haulageDataPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search Haulage Data - 301" page is available
# #     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "HaulageDataMenu" on the "homePage" Page
#     And I click the "HlShipperPoolCodesMenu" on the "homePage" Page
#     Then I verify that the "HLShipperPoolCodes" page is displayed under "haulageDataPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search HL Shipper Pool Codes" page is available
# #     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "HaulageDataMenu" on the "homePage" Page
#     And I click the "HlCommExceptionsMenu" on the "homePage" Page
#     Then I verify that the "HLCommExceptions" page is displayed under "haulageDataPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search HL Comm Exceptions" page is available
# #     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "HaulageDataMenu" on the "homePage" Page
#     And I click the "CommExceptionsCsvMenu" on the "homePage" Page
#     Then I verify that the "CommExceptionscsv" page is displayed under "haulageDataPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search Comm Exceptions .csv" page is available
# #     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "HaulageDataMenu" on the "homePage" Page
#     And I click the "OoclClfMenu" on the "homePage" Page
#     Then I verify that the "OOCLCLF" page is displayed under "haulageDataPage"
#     # Then I Verify search link is available 
#     # When I navigate to search page
#     # Then I Verify "Search OOCL CLF" page is available
#     # And I log out from the CMS application

# # #---------------------Movements------------------------
# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "MovementsMenu" on the "homePage" Page
#     And I click the "UnitMovementsMenu" on the "homePage" Page
#     Then I verify that the "UnitMovements" page is displayed under "movementsPage"
#     Then I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Unit Movements" page is available
#     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "MovementsMenu" on the "homePage" Page
#     And I click the "UnitRejectedMovesMenu" on the "homePage" Page
 #   # Then I verify that the "MovementEventCustomers" page is displayed under "movementsPage"
#     Then I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Unit Rejected Moves" page is available
#     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "MovementsMenu" on the "homePage" Page
#     And I click the "ArchivedRejectedMovesMenu" on the "homePage" Page
#     Then I verify that the "ArchivedRejectedMoves" page is displayed under "movementsPage"
#     Then I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Archived Rejected Moves" page is available
#     And I log out from the CMS application






# # #---------------------apiMovementEvents------------------------
# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "APIMovementEventsMenu" on the "homePage" Page
#     And I click the "MovementEventCustomersMenu" on the "homePage" Page
#     Then I verify that the "MovementEventCustomers" page is displayed under "apiMovementEventsPage"
#     Then I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Movement Event Customers" page is available
#     And I log out from the CMS application

# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "TrackingMenu" on the "homePage" Page
#    And I click the "APIMovementEventsMenu" on the "homePage" Page
#     And I click the "MovementEventTransactionsMenu" on the "homePage" Page
#     Then I verify that the "MovementEventTransactions" page is displayed under "apiMovementEventsPage"
#     Then I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Movement Event Transactions" page is available
#     And I log out from the CMS application


# Scenario: The CMS Quick Tracking Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "QuickTrackingMenu" on the "homePage" Page
#     Then I verify that the "UnitMovements" page is displayed under "quickTrackingPage"
#     Then I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Unit Movements" page is available
#     And I log out from the CMS application



# # ####-------------------------Billing Run---------------------
# Scenario: The CMS Company Search page supports searching Haulage Data - 301 details.
#     Given I am logged into the CMS application
#     When I click the "BillingMenu" on the "homePage" Page
#    And I click the "BillingRunMenu" on the "homePage" Page
#     And I click the "BillingRunSubMenu" on the "homePage" Page
#     Then I verify that the "BillingRun" page is displayed under "billingRunPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search Billing Run" page is available
# #     And I log out from the CMS application

# # #####------------------ReferenceData------------------

# Scenario: The CMS Pool Reference Data Options page supports selecting options from the menu.
#     Given I am logged into the CMS application
#     When I click the "SystemAdministrationMenu" on the "homePage" Page
#     And I click the "ReferenceDataMenu" on the "homePage" Page
#     And I click the "PoolReferenceDataMenu" on the "homePage" Page
#     And I wait for page to load
#     Then I verify that the "PoolReferenceData" page is displayed under "referenceDataPage"
# #     Then I Verify search link is available 
# #     When I navigate to search page
# #     Then I Verify "Search  Pool Reference Data" page is available
# #     And I log out from the CMS application