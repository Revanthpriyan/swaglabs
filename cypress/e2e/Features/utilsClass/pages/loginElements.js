import {action} from "../helper/actions.js";

const act=new action();

//for storing repos
const login={
    username:"#user-name",
    password:"#password",
    login_button:"#login-button",
    inventoryFilter:"#inventory_filter_container",
    assertErrorButton:".error-button"
}

//protect the Webelement with protected variable
class loginUserparent{
    _username;
    _password;
UserName(){
    this._username=cy.get(login.username);
    return this._username;
}
PassWord(){
    this._password=cy.get(login.password);
    return this._password;
}
}

//child class for protected variables
class user1 extends loginUserparent{
    submit(){
        const loginButton=cy.get(login.login_button)
        return loginButton;
    }
    assertHomePage(){
        const filter=cy.get(login.inventoryFilter)
        return filter;
    }
    assertErrorPage(){
        const errorbutton=cy.get(login.assertErrorButton)
        return errorbutton
    }
}
const user=new user1;
export function loginMethod(){
  act.sendkeys(user.UserName(),"standard_user");
  act.sendkeys(user.PassWord(),"secret_sauce");
  act.toClick(user.submit())
}
export function invalidUserName(uservalue){
    act.sendkeys(user.UserName(),uservalue);
    act.sendkeys(user.PassWord(),"secret_sauce");
    act.toClick(user.submit())
}

export function invalidPassword(userpassword){
    act.sendkeys(user.UserName(),"standard_user");
    act.sendkeys(user.PassWord(),userpassword);
    act.toClick(user.submit())
}
export function invalidData(uservalue,userpassword){
    act.sendkeys(user.UserName(),uservalue);
    act.sendkeys(user.PassWord(),userpassword);
    act.toClick(user.submit())
}

export function invalid_login(){
    act.invalidAssertion(user.assertHomePage);
}
export function waitforElement(){
    return cy.wait(5000);
}

export function assertExistElements(){
    const WebElement=user.assertHomePage()
    return WebElement.should('exist')
}
export function invalidAssertion(){
    const WebElement=user.assertErrorPage()
    return WebElement.should('exist')
}
 //log
export function logging(text){
        return cy.log(text);
}




