'use strict';
angular.module('funtown').controller('MainController', ['$scope','$log','AuthService', 
	function($scope,$log,AuthService,ProductService){
		$log.debug('mainController');
		function init(){
			$scope.searchBox = {};
			$scope.searchBox.categoryOverview = {};
		}
		$scope.username = function(){
			return AuthService.getUserName();
		}
		$scope.isAuthenticated = function(){
			return AuthService.isAuthenticated();
		}
		$scope.contentTransfer = function(content){
			return JSON.parse(content);
		}
		init();
	}
])