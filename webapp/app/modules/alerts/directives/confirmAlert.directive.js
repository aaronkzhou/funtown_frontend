'use strict';
angular.module('alerts').directive('confirmAlert', ['$alert',function($alert){
	return {		
		// scope: {}, // {} = isolate, true = child, false/undefined = no change		
		restrict: 'A',			
		link:function(scope,element,attr){
			//stick the alert container to the parent 
			angular.element(element[0]).parent().attr("id","alerts-container");
			var details = JSON.parse(attr.details);
			scope.buttons = details.buttons;
			var confirmAlert = $alert({
				title : "Are you sure?",
				type : "warning",
				dismissable : false,
				container : "#alerts-container",
				templateUrl : "app/modules/alerts/templates/confirm.alert.template.html",
				content : details.message,
				show:false,
				scope:scope
				
			})
			element.on('click', confirmAlert.show);			
		}		
	};
}]);