import {browser, ElementFinder, ExpectedConditions} from 'protractor';

export class CommonPageHelper {
	
	readonly TIMEOUT_MS = 120000; // 2 minutes
	
    protected async goTo(url: string) {
         browser.waitForAngularEnabled(false);
		 
         return browser.get(url);
     }

     public async click(item: ElementFinder) {
        this.waitClickableForElement(item);
		
        return item.click();
	 }	

	 public async clickViaJS(item: ElementFinder) {
		this.waitClickableForElement(item);

		return browser.executeScript('arguments[0].click();', item.getWebElement()); 
	 }
	
	 protected async sendKeysIfVisible(item: ElementFinder, text: string) {	     
         this.waitVisibilityForElement(item);		 
		 
         return item.sendKeys(text);
	 }
	 
	 protected async sendKeysIfPresent(item: ElementFinder, text: string) {
		 this.waitPresenceForElement(item);	 
		   
         return item.sendKeys(text);
	 }
	 
	 protected async waitClickableForElement(item: ElementFinder, maxWaitTimeInMs=this.TIMEOUT_MS) {		         
		 
		 try {
		     await browser.wait(ExpectedConditions.elementToBeClickable(
                item), maxWaitTimeInMs);
		 } catch(e) {	
			this.consoleError(e);
         } 	 
	 }
	 
	 protected async waitVisibilityForElement(item: ElementFinder, maxWaitTimeInMs=this.TIMEOUT_MS) {		         
		 
		 try {
		     await browser.wait(ExpectedConditions.visibilityOf(
                item), maxWaitTimeInMs);
		 } catch(e) {	
			this.consoleError(e);
         } 	 
	 }
	 
	 protected async waitPresenceForElement(item: ElementFinder, maxWaitTimeInMs=this.TIMEOUT_MS) {		         
		 
		 try {
		     await browser.wait(ExpectedConditions.presenceOf(
                item), maxWaitTimeInMs);
		 } catch(e) {	
			this.consoleError(e);
         } 	 
	 }

	 protected async waitTextToBePresentInElement(item: ElementFinder, text: string, maxWaitTimeInMs=this.TIMEOUT_MS) {		         
		 
		try {
			await browser.wait(ExpectedConditions.textToBePresentInElement(
			   item, text), maxWaitTimeInMs);
		} catch(e) {	
		   this.consoleError(e);
		} 	 
	}
	 
	 private consoleError(e: Error) {
		 console.log("----------------------  ERROR  ---------------------------");				 
	     console.log("ERROR:" + e); 				 			 	 		 
		 console.log("----------------------------------------------------------");				  
	 }
    
}