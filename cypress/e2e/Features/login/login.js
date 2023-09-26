import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";

  When("I open the application using url",()=> {
  cy.visit("https://www.saucedemo.com/v1/index.html")
  })

   Then("Browser should open",()=> {

   })