sap.ui.define([], function () {
	"use strict";

	return {
		formatDate: function (sValue) {
			if (!sValue) {
				return null;
			}

			return new Date(sValue);
		},
		
		formatRowHighlight: function (oValue){
		    var state;
		    switch (oValue) {
		    	case 'USD':
		    		state = "Error";
		    		break;
		    	case 'EUR':
		    	    state = "Warning";
		    	    break;
		    	 case 'JPY':
		    	     state = "Success";
		    	     break;
		    	 default: 
		    	 state = "None";
		    	
		    }
		    
		    return state;

		}
		
	};

});