'use strict';
angular.module('alerts').service('AlertsService', ['$alert', 
	function($alert){
	
		this.notify = function(message,type){
			var notifyAlert = $alert({				
				type: type ? type : 'notify',
				container : "#notification-container",				
				templateUrl : "app/modules/alerts/templates/notification.alert.template.html",
				content : message,
				duration: 3,
				show:true
			})	
			return notifyAlert;		
		}
	}
])