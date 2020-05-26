sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
], function (Controller,formatter) {
	"use strict";

	return Controller.extend("com.vega.ReportFreeSmartTable.controller.App", {
	    formatter: formatter,
		onInit: function () {

		},

		onBeforeExport: function (oEvt) {
			var mExcelSettings = oEvt.getParameter("exportSettings");

			//Disale wroker as mockser is usea
			mExcelSettings.worker = false;
		}
// 				formatRowHighlight: function (oValue){
// 		    var state;
// 		    switch (oValue) {
// 		    	case 'USD':
// 		    		state = "Error";
// 		    		break;
// 		    	case 'EUR':
// 		    	    state = "Warning";
// 		    	    break;
// 		    	 case 'JPY':
// 		    	     state = "Success";
// 		    	     break;
// 		    	 default: 
// 		    	 state = "None";
		    	
// 		    }
		    
// 		    return state;

// 		}

	});
});