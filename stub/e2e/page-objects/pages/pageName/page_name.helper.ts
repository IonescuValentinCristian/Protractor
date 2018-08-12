import {CommonPageHelper} from '../common/common-page.helper';
// import {PageName} from './page_name.po';

// import {extractSubstring} from '../../../util/test-util';

export class PageNameHelper extends CommonPageHelper {	  
   	
	readonly PAGE = "/mail";	    
	
    public async goToPage() {
        return await super.goTo(this.PAGE);    
    }

    // other methods
}