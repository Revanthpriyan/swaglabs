import { assert } from "chai";

export class action{

    //click and double click
    toClick(WebElement){
        WebElement.trigger('mouseover').click();
    }
    toDoubleClick(WebElement){
        WebElement.trigger('mouseover').dblclick();
    }

    //scroll in the page
    scrollwithElements(WebElement){
        WebElement.scrollIntoView();
    }
    scrollwithPostion(WebElement,x,y){
        WebElement.scrollTo(x,y);
    }
    scrollwithDuration(WebElement,time){
        WebElement.scrollTo("bottom",{duration:time});
    }

    //clear the characters
    clearValue(WebElement){
        WebElement.click().clear();
    }
    clearText(WebElement){
        WebElement.trigger('mouseover').clear();
    }
    clearTextbox(WebElement){
        WebElement.type('{enter}').clear();
    }


    //type the values
    sendkeys(WebElement,value){
        WebElement.click().type(value);
    }
    sendkeysWithClick(WebElement,value){
        WebElement.type(value+'{enter}');
    }


    //Assertions
    assertVisibleElements(WebElement){
        WebElement.should('be.visible')
    }
    
    asserthaveLength(WebElement,length){
        WebElement.should('have.length',length)
    }
    assertContains(WebElement,value){
        WebElement.should('contains',value)
    }
    MochaAssertTrue(actual,expected){
        assert.equal(actual,expected)
    }
    MochaAssertFalse(actual,expected){
        assert.notEqual(actual,expected)
    }

   
}