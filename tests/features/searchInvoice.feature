Feature: Invoice Billing Actions

#   Scenario: User searches and downloads a specific invoice
  
#     Given I am logged into the CMS application
#     When I navigate to the Invoices section from Billing menu
#     And I search for invoice number "SAC30000841C"
#     Then I should see the invoice listed in the search result
#     When I select the invoice and choose to download it
#     And I confirm the invoice download
#     Then the download confirmation message should be displayed
#     And I log out from the CMS application


# Scenario: User searches and downloads a specific invoice
  
#     Given I am logged into the CMS application
#     When I navigate to the Invoices section from Billing menu
#     And I search for "Invoice #" from "Invoice Bill" sheet
#     Then I should see the invoice listed in the search result
#     When I select the invoice and choose to download it

# Scenario: User searches and downloads a specific Voucher
  
#     Given I am logged into the CMS application
#     When I navigate to the Voucher section from Billing menu
#     And I search for "Voucher #" from "Voucher Bill" sheet
#     Then I Verify search link is available 
#     When I navigate to search page
#     Then I Verify "Search Vouchers" page is available

#    Scenario: User export and downloads a specific invoice
  
#     Given I am logged into the CMS application
#     When I navigate to the Invoices section from Billing menu
#     And I search for invoice number "SAC30000841C"
#     Then I should see the invoice listed in the search result
#     When I export the invoice list to Excel
#     Then the filter information should be visible
#     When I remove the filter
#     Then the invoice list should be reset
#     And I log out from the CMS application

#   Scenario Outline: User searches and downloads a specific invoice

#   Given I am logged into the CMS application
#   When I navigate to the Invoices section from Billing menu
#   And I search for invoice number "<invoiceNumber>"
#   Then I should see the invoice listed in the search result
#   When I select the invoice and choose to download it
#   And I confirm the invoice download
#   Then the download confirmation message should be displayed
#   And I log out from the CMS application

#   Examples:
#     | invoiceNumber    |
#     | SAC30000841C     |