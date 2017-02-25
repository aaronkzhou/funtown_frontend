'use strict';
angular.module('auth').controller('LogoutController', ['$log','$scope', 'AuthService','$state','AlertsService',
	function($log,$scope,AuthService,$state,AlertsService){
		$log.debug("LogoutController");
		AuthService.logout().then(function(){
			AlertsService.notify("Logged out successfully.");
		}).finally(function(){
			$state.go("login");
		});
	}
])