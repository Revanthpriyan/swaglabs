Feature:Login to the SwagLabs Website

Background:launch the website URL
    Given Launch the SwagLabs URL

  Scenario:login with Valid credentials
    When Enter valid Username and Password
    Then Assert the logo of the Website with valid credentials

  Scenario:login with invalid username and valid password
    When Enter Invalid Username and valid Password
    Then Assert the logo of the Website with invalid username

  Scenario:login with Valid username and invalid password
    When Enter valid Username and Invalid Password
    Then Assert the logo of the Website with invalid password

  Scenario:login with InValid credentials
    When Enter Invalid Username and Password
    Then Assert the logo of the Website with invalid credentials