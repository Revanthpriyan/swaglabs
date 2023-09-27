import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {DummyValues} from "F:/cypress/swaglabs/cypress/helper/utils.js"
import {loginMethod,invalidUserName,invalidPassword,invalidData,assertExistElements,invalidAssertion, logging, waitforElement} from "F:/cypress/swaglabs/cypress/pages/loginElements.js"

  const obj=new DummyValues();
  obj.setrandomString(10)
  let Dummy_uservalue=obj.getrandomString();
  obj.setRandomNum();
  let Dummy_password=obj.getRandomNumber();

    
  Given("Launch the SwagLabs URL",()=>{
    cy.visit('https://www.saucedemo.com/v1/index.html')
  })

  When("Enter valid Username and Password",()=> {
    new loginMethod();
    new logging("user enters with valid username and password")
  })
   Then("Assert the logo of the Website with valid credentials",()=> {
    new assertExistElements();
   })


   When("Enter Invalid Username and valid Password",()=> {
  new invalidUserName(Dummy_uservalue);
    new logging("user enters with invalid username and valid password")
  })
   Then("Assert the logo of the Website with invalid username",()=> {
    new invalidAssertion();
   })


   When("Enter valid Username and Invalid Password",()=> {
    new invalidPassword(Dummy_password);
    new logging("user enters with valid username and invalid password")
  })
   Then("Assert the logo of the Website with invalid password",()=> {
    new invalidAssertion();
   })


   When("Enter Invalid Username and Password",()=> {
    new invalidData(Dummy_uservalue,Dummy_password);
    new logging("user enters with both invalid username and password")
  })
   Then("Assert the logo of the Website with invalid credentials",()=> {
    new invalidAssertion();
   })