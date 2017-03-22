'use strict';
angular.module('alerts').service('AlertsService', ['$alert', 
	function($alert){
	
		this.notify = function(message,type,manualClose){
			var notifyAlert = $alert({				
				type: type ? type : 'notify',
				container : "#notification-container",				
				templateUrl : "app/modules/alerts/templates/notification.alert.template.html",
				content : message,
				duration: manualClose ? 0 : 3,
				show:true
			})	
			return notifyAlert;		
		}
	}
])