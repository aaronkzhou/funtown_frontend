'use strict';
angular.module('auth').controller('LoginController', ['$log','$scope', 'AuthService','$state','AlertsService',
	function($log,$scope,AuthService,$state,AlertsService){
		$log.debug("loginController");
		$scope.credentials = {};
		//$scope.credentials.username="summer17";
		//$scope.credentials.password="summer17";
				
		$scope.authenticate = function(){				
			$log.debug("login");
			if($scope.login && $scope.login.$valid){
				AuthService.authenticate($scope.credentials).then(function(){
					$state.go(AuthService.getForwardPath());
				},function(err){
					$log.debug("login err",err);
					$scope.error = err.data.message;
				});
			}else{
				return false;
			}	
		}			
		
	}
])