'use strict';
angular.module('funtown').controller('MainController', ['$scope','$log','AuthService', 
	function($scope,$log,AuthService){
		$log.debug('mainController');
		
		$scope.username = function(){
			return AuthService.getUserName();
		}
		
		$scope.isAuthenticated = function(){
			return AuthService.isAuthenticated();
		}
	}
])